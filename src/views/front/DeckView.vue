<template>
  <div class="container">
    <h1>卡組專欄</h1>
    <n-grid cols="1 s:2 l:3" responsive="screen" class="mg-t">
      <n-grid-item v-for="(deck, idx) in decks" :key='idx'>
      <a @click="openDialog(deck._id, idx)">
        <n-card>
          <template #cover>
            <img :src="deck.image"/>
          </template>
          <h1>{{ deck.name }}</h1>
        </n-card>
        </a>
      </n-grid-item>
    </n-grid>
  </div>
  <n-modal class="show-article"  v-model:show="showModal" preset="card" style=" width:80%; background: black; color:white;" >
      <div class="deck_image">
        <img :src="form.image"/>
      </div>
      <h1>{{ form.name }}</h1>
      <h2>觀念解析</h2>
      <h4 >{{ form.description }}</h4>
      <div v-if="form.playstyle!== 'undefined'">
        <h2>遊玩風格</h2>
        <h4>{{ form.playstyle }}</h4>
      </div>
      <div v-if="form.decklogic !== 'undefined'">
        <h2 >其他資訊</h2>
        <h4>{{ form.decklogic }}</h4>
      </div>
      <h4><a :href="form.article" target="_blank">文章來源</a></h4>
  </n-modal>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'


const decks = reactive([])

const form = reactive({
  _id: '',
  name: '',
  image: [],
  description: '',
  playstyle: '',
  decklogic: '',
  article: '',
  idx: -1,
  submitting: false,
  showModal: false
})

const openDialog = (_id, idx) => {
  showModal.value = true
  form._id = _id
  if (idx > -1) {
    form.name =decks[idx].name
    form.description =decks[idx].description
    form.playstyle = decks[idx].playstyle
    form.decklogic = decks[idx].decklogic
    form.image =decks[idx].image
    form.article=decks[idx].article
  }
  form.idx = idx
  form.showModal = true
  form.submitting = false
}

const showModal= ref(false)

const init = async () => {
  try {
    const { data } = await api.get('/decks')
    decks.push(...data.result)
  } catch (error) {
    console.log(error)
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
    text-align: center;
    padding: 150px 0;
  }

  .n-card {
    background-color: black;
    border: 2px solid rgb(153,153,151) ;
  }


  .n-card:hover {
    cursor: pointer;
    border: 2px solid rgb(157,195,30);
  }

  .n-card h1 {
    margin-top: 5%;
  }

  .n-modal h1 {
    color: deepskyblue;
    margin-top: -0.1%;
  }

  .deck_image {
    width: 200px;
    height: 200px;
    margin: auto;
  }
  .deck_image img {
    width: 100%;
    height: 100%;
  }

  .n-modal h1 {
    font-size: 2.2rem;
  }

  .n-modal h2 {
    text-align: center;
    color: #f1ed56;
    font-size: 2rem;
  }

  .n-modal h4 {
    text-align: center;
    margin-top: 0.5%;
    font-size: 1.2rem;
  }

  .n-modal h4 a {
    color: aqua;
  }


  .n-grid{
  gap:20px !important;
  }  


  @media (min-width: 1400px) { 
  
    .n-modal h4 {
    white-space: pre;
    }
  }


</style>