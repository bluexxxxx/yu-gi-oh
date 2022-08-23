<template>
  <div class='container'>
    <h1>商品專區</h1>
    <n-grid cols="1 s:2 l:3" responsive="screen" class="mg-t" >
      <n-grid-item v-for="(product, idx) in sliceProducts" :key='idx'>
          <div class="n-card-container">
            <n-card v-if='sliceProducts.length>0' :key='product._id'>
              <template #cover>
                <div class="imgbox">
                  <img :src="product.image">
                </div>
              </template>
              <p> {{product.name}}</p>
              <h2>商品價格  {{product.price}}</h2>
              <h3> {{product.description}}</h3>
              <n-space vertical>
                <n-input-number class="buybutton" v-model:value="product.quantity" placeholder="購買數量"  :min="0"/>
              </n-space>
              <div class="btn">
                <n-button @click="addCart({ product: product._id, quantity: product.quantity })" round color="rgb(254,74,14)">
                  加入購物車
                </n-button>
              </div>
            </n-card>
          </div>
      </n-grid-item>
    </n-grid>
    <n-pagination v-model:page="currentPage" :page-count="Math.ceil(products.length / pageSize)" />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const currentPage = ref(1)
const pageSize = 9
const sliceProducts = computed(()=> {
  return products.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const { addCart } = user

const products = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result.map(d => {
      return {...d,quantity:0}
    }))
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


.n-card {
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background: black;
  border-radius: 0 30px 0 30px;
  clip-path: polygon(30px 0%, calc(100% - 30px) 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% calc(100% - 30px), 0% 30px);
}

.n-card-container {
  position: relative;
  height: 800px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin-top: 2%;
  /* border:2px solid rgb(153,153,151); */
  background: rgb(153,153,151);
  border-radius: 0 30px 0 30px;
  clip-path: polygon(30px 0%, calc(100% - 30px) 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% calc(100% - 30px), 0% 30px);
}

.n-card-container:hover {
  /* background: rgb(157,195,30);
  box-shadow:inset 0px 0px 10px 1px rgb(187,205,30); */
  transition: 0.5s;
  animation: shiny 3.5s infinite;
}

@keyframes shiny{
    0%{ background: rgb(157,195,30); box-shadow:inset 0px 0px 10px 1px rgb(187,205,30);}
    25%{ background: rgba(157,195,30,0.5); box-shadow:inset 0px 0px 10px 1px rgba(187,205,30,0);}
    50%{ background: rgb(157,195,30); box-shadow:inset 0px 0px 10px 1px rgb(187,205,30);}
    75%{ background:  rgba(157,195,30,0.5); box-shadow:inset 0px 0px 10px 1px rgba(187,205,30,0);}
    100%{ background: rgb(157,195,30); box-shadow:inset 0px 0px 10px 1px rgb(187,205,30);}
}

.buybutton {
  width: 70%;
  margin: auto;
}


.imgbox {
  width: 300px;
  height: 600px;
  margin: auto;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

p {
  font-size: 1.5rem;
  margin-top: 5%;
  text-align: center;
  color: white;
}

h2, h3 {
  text-align: center;
  color: white;
}

.n-input-number {
  margin-top: 5%;
}

.n-input-wrapper:hover {
  border: 1px rgb(157,195,30) ;
}


.container >>>.n-input .n-input-wrapper{
  background:linear-gradient(rgb(58,58,58) ,rgb(90,90,90) );
}

.container >>>.n-input .n-input__input-el{
  color: white;
}

.container >>>.n-input svg{
  color: white;
}

h2 { font-family:YGO_Card_JP, serif; }
h3 { font-family:YGO_Card_JP, serif; }
.btn {
  text-align: center;
  margin-top: 5%;
}
.n-button {
  text-align: center;
}

.n-grid{
  gap:20px !important;
}

.n-pagination {
  float: right;
  margin-top: 50px;
}
</style>