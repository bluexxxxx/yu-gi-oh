<template>
  <h1>訂單管理</h1>
  <div class="container">
    <div class="ordersbox">
      <n-divider />
      <div>
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>日期</th>
                <th>使用者</th>
                <th>金額</th>
                <th>商品</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='(order, idx) in sliceOrders'>
                <tr v-if='sliceOrders.length > 0' :key='order._id'>
                  <td>{{order._id}}</td>
                  <td>{{ new Date(order.date).toLocaleDateString() }}</td>
                  <td>{{ order.user.account }}</td>
                  <td>{{ order.totalPrice }}</td>
                  <td>
                    <ul>
                      <li v-for='product in order.products' :key='product._id'>
                      {{product.product.name}} x {{product.quantity}}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <n-button type="error" @click="del(order._id, idx)">刪除</n-button>
                  </td>
                </tr>
              </template>
            </tbody>
          </n-table>
        </n-space>
      </div>
      <n-pagination v-model:page="currentPage" :page-count="Math.ceil(orders.length / pageSize)" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const currentPage = ref(1)
const pageSize = 5
const sliceOrders = computed(()=> {
  return orders.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

// 刪除訂單
const del = async (_id, idx) => {
  try {
    await apiAuth.delete('/orders/' + _id)
    Swal.fire({
        icon: 'success',
        title: '成功',
        text: '刪除成功'
      })
    orders.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}
init()
</script>

<style scoped>
  .container {
    margin: auto;
    width: 90%;
    margin-left: 178px;
  }
  .ordersbox {
    margin: auto;
    width: 80%;
  }

  .n-pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 1.5rem;
  }

</style>