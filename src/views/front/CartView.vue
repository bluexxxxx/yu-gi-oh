<template>
  <div class="container">
    <h1>購物車</h1>
    <n-row>
      <n-col :span="24">
        <n-divider />
      </n-col>
      <n-col :span="24">
        <div>
          <n-space size="small" vertical>
            <n-table striped>
              <thead>
                <tr>
                  <th class="picture">圖片</th>
                  <th>名稱</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody v-if='cart.length > 0'>
                  <tr  v-for='(item, idx) in cart'  :key='item._id'>
                    <td class="picture"><n-avatar :size="80" object-fit="cover" :src="item.product.image" /></td>
                    <td>{{ item.product.name }}</td>
                    <td>{{ item.product.price }}</td>
                    <td>
                      <n-button-group>
                        <n-button type="warning" @click='updateCart(idx, item.quantity-1)'  > - </n-button>
                        <div class="textbtn">
                          <n-button  text> {{ item.quantity }} </n-button>
                        </div>
                        <n-button type="warning" @click='updateCart(idx, item.quantity+1)' > + </n-button>
                      </n-button-group>
                    </td>
                    <td> {{ item.product.price * item.quantity }} </td>
                    <td> <n-button type="error" @click='updateCart(idx, 0)'>刪除</n-button> </td>
                  </tr>
              </tbody>
            </n-table>
          </n-space>
        </div>
      </n-col>
      <n-col class="total" :span="24" >
        <p> 總金額 {{ totalPrice }} </p>
      </n-col>
      <n-col class="total" :span="24">
        <n-button class="total-btn"  type="primary" @click='user.checkout' :disabled='!canCheckout'> 結帳 </n-button>
      </n-col>
    </n-row>
    <div class="footermargin"></div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'


const user = useUserStore()

const cart = reactive([])

const totalPrice = computed(() => {
  // reduce 對cart做累加 a代表現在累加多少 b代表跑的參數
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})
const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(item => {
    return !item.product.sell
  })
})

const updateCart = async (idx, quantity) => {
  // 商品更新只改商品 product 跟數量 quantity 用cart[idx].product._id去抓
  const result = await user.updateCart({ product: cart[idx].product._id, quantity })
  if (result) {
    if (quantity === 0) {
      cart.splice(idx, 1)
    } else {
      cart[idx].quantity = quantity
    }
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}

init()
</script>

<style scoped>
  .container {
    width: 75%;
    margin: auto;
    padding: 150px 0;
  }

  h1 {
    text-align: center;
    color: white;
    
  }
  .textbtn {
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    justify-content: center;
  }

  .total {
    display: flex;
    justify-items: end;
    align-items: flex-end;
    flex-direction: column;
    flex-wrap: wrap;
  }



  p {
    margin-left: 6%;
    margin-top: 8%;
    font-size: 1.3rem;
    color: white;
  }

  .n-table th {
    text-align: center;
  }

    .n-table td {
    text-align: center;
  }


  .total-btn {
    width: 80px;
  }

  .picture {
    display: none;
  }

  .footermargin {
    padding: 30px 0;
  }


  @media (min-width: 1400px) {

    .textbtn {
      margin-left: 20%;
      margin-right: 20%;
      display: flex;
      justify-content: center;
  }
    .picture {
      display: table-cell;
    }
  }
</style>

