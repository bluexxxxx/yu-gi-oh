<template>
  <div class="container">
    <h1>訂單</h1>
      <n-row>
        <n-col :span="24">
          <n-divider />
        </n-col>
        <n-col :span="24">
          <div>
            <n-space vertical>
              <n-table  size="small" striped>
                <thead>
                  <tr>
                    <th class="order_id">ID</th>
                    <th>日期</th>
                    <th>金額</th>
                    <th>商品</th>
                  </tr>
                </thead>
                <tbody v-if='orders.length > 0'>
                  <tr v-for='order in orders' :key='order._id'>
                    <td class="order_id" > {{ order._id }} </td>
                    <td>{{ new Date(order.date).toLocaleDateString() }} </td>
                    <td> {{ order.totalPrice }} </td>
                    <td>
                        <li v-for='product in order.products' :key='product._id'>
                        {{ product.product.name }} x {{ product.quantity }}
                        </li>
                    </td>
                  </tr>
                </tbody>
              </n-table>
            </n-space>
          </div>
        </n-col>
      </n-row>
      <div class="test"></div>
    
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
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
    width: 75%;
    margin: auto;
    padding: 180px 0 ;
  }

    .test {
    padding: 130px 0 ;
  }

  .n-table  {
    text-align: center;
  }

  .n-table li {
    list-style: none;
  }

  .order_id {
    display: none;
  }


  @media (min-width: 1400px) {
    .order_id {
      display: table-cell;
    }
  }


</style>