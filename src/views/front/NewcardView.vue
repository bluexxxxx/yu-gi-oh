<template>
  
  <div class="container">
    <h1>新卡情報</h1>
    <div class="imgbox mg" >
      <img src="@/assets/product_05.png">
    </div>
    <n-grid cols="2 s:4 l:6" responsive="screen">
      <n-grid-item v-for="newcard in sliceNewcards" :key='newcard._id'>
      <a @click="openDialog(newcard._id)">
        <n-card class="shiny">
          <template #cover>
            <img :src="newcard.image"/>
          </template>
        </n-card>
        </a>
      </n-grid-item>
    </n-grid>
    <n-pagination v-model:page="currentPage" :page-count="Math.ceil(newcards.length / pageSize)" />
  </div>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-modal v-model:show="showModal" class="modal-card">
      <n-grid cols="4" responsive="screen">
        <n-grid-item :offset="0.2">
          <img :src="form.image" class="modal-image" />
        </n-grid-item>
        <n-grid-item span="3">
          <n-card size="huge" :bordered="false" role="dialog">
            <template #header>
              <!-- 判斷是不是通常怪獸 -->
              <div v-if="form.type==='通常怪獸'" class="header header-通常怪獸">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
              <!-- 判斷是不是效果怪獸 -->
              <div v-if="form.type==='效果怪獸'" class="header header-效果怪獸">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
              <!-- 判斷是不是融合怪獸 -->
              <div v-if="form.type==='融合怪獸'" class="header header-融合怪獸">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
              <!-- 判斷是不是儀式怪獸 -->
              <div v-if="form.type==='儀式怪獸'" class="header header-儀式怪獸">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
              <!-- 判斷是不是同步怪獸 -->
              <div v-if="form.type==='同步怪獸'" class="header header-同步怪獸">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
              <!-- 判斷是不是超量怪獸 -->
              <div v-if="form.type==='超量怪獸'" class="header header-超量怪獸">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
              <!-- 判斷是不是連結怪獸 -->
              <div v-if="form.type==='連結怪獸'" class="header header-連結怪獸">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
              <!-- 判斷是不是魔法 -->
              <div v-if="form.type==='魔法'" class="header header-魔法">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
              <!-- 判斷是不是陷阱 -->
              <div v-if="form.type==='陷阱'" class="header header-陷阱">
                <h1 style="">{{ form.name }}</h1>
                <img :src="attrImg(form.attr)" class="arrtimg">
              </div>
            </template>
            <div class="description">
              <h4>{{ form.description }}</h4>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-modal>
  </n-config-provider>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { NConfigProvider } from 'naive-ui'

const currentPage = ref(1)
const pageSize = 12
const sliceNewcards = computed(()=> {
  return newcards.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const attrs = [
  '光', '暗', '水', '炎', '地', '風', '神', '魔', '罠'
]

const attrImg = (attr) => {
  return new URL(`../../assets/GUI_T_Icon1_Attr0${attrs.indexOf(attr) + 1}_Ruby.png`, import.meta.url).href
}
const themeOverrides = {
  Card: {
    colorModal: 'transparent'
  }
}

const newcards = reactive([])

const form = reactive({
  _id: '',
  name: '',
  image: [],
  description: '',
  type:'',
  attr:'',
  idx: -1,
  submitting: false,
  showModal: false
})

const openDialog = (_id) => {
  const idx = sliceNewcards.value.findIndex(item => item._id === _id)
  showModal.value = true
  form._id = _id
  if (idx > -1) {
    form.name =sliceNewcards.value[idx].name
    form.description =sliceNewcards.value[idx].description
    form.image =sliceNewcards.value[idx].image
    form.type =sliceNewcards.value[idx].type
    form.attr=sliceNewcards.value[idx].attr
  }
  form.idx = idx
  form.showModal = true
  form.submitting = false
}

const showModal= ref(false)

const init = async () => {
  try {
    const { data } = await api.get('/newcards')
    newcards.push(...data.result)
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
  .modal-image {
    width: 100%;
    margin-top: 150px;
  }

  .container {
    width: 75%;
    margin: auto;
    text-align: center;
    padding-top: 180px;
  }


  .shiny { 
    border: 2px solid rgb(153,153,151) ;
    color: white;
  }

  .n-card {
    color: white;
    
  }


  .shiny:hover {
    cursor: pointer;
    transition: 0.5s;
    /* border: 2px solid rgb(157,195,30); */
    animation: shiny 3.5s infinite;
}


@keyframes shiny{
    0%{ border:2px solid rgb(157,195,30); }
    25%{ border:2px solid rgba(157,195,30,0.4); }
    50%{ border:2px solid rgb(157,195,30);}
    75%{ border:2px solid  rgba(157,195,30,0.4); }
    100%{ border:2px solid rgb(157,195,30);}
}


  .n-modal .n-card {
    border: none;
    background:rgb(36,30,57) ;
  }

  .n-card h1 {
    margin-top: 5%;
    font-size: 0.9rem;
  }

  .n-modal h1 {
    margin-top: -0.1%;
  }

  h4 {
    text-align: left;
    margin-top: 0.5%;
    margin-left:2%;
    font-size: 1.2rem;
  }


  .n-grid{
  gap:20px !important;
  }

  .n-modal .n-grid {
    background-color: rgb(36,30,57) !important;
  }

  .modal-card {
    margin-top: 150px;
  }

  .modal-card >>> .n-card {
    background: transparent !important;
  }

  .modal-card >>> .n-card-header__main .header {
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 10px;
  }

  .modal-card >>> .n-card-header__main {
    padding: 10px;
    border-image-source: url(../../assets/GUI_CardInfoDetail_Frame_Info2.png) ;
    border-image-slice: 27 27 27 27;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: repeat repeat;
    border-style: solid;
  }

  .modal-card >>> .header img {
    display: block;
    height: 100%;
  }

  .modal-card >>> .header h1 {
    color: white;
    text-align: left;
    display: block;
  }


  .modal-card >>> .header-通常怪獸 {
    background: linear-gradient(90deg, #4a4509, #9f9120);
    border: 1px solid #998d16;
  }

.description {
  width: 100%;
  height: 400px;
  padding: 20px;
  box-sizing: border-box;
  background: black;
}



  .modal-card >>> .description {
    padding: 10px;
    border-image-source: url(../../assets/GUI_CardInfoDetail_Frame_Info2.png) ;
    border-image-slice: 27 27 27 27;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: repeat repeat;
    border-style: solid;
}

  .modal-card >>> .header-效果怪獸 {
    background: linear-gradient(90deg,#432608, #9f5e21);
    border: 1px solid #653b0e;
  }

  .modal-card >>> .header-儀式怪獸 {
    background: linear-gradient(90deg, #092546, #225bab);
    border: 1px solid #1b559f;
  }

  .modal-card >>> .header-融合怪獸 {
    background: linear-gradient(90deg, #350854, #69249b);
    border: 1px solid #611d97;
  }

  .modal-card >>> .header-同步怪獸 {
    background: linear-gradient(90deg, #565656, #a1a19f);
    border: 1px solid #2f3233;
  }

  .modal-card >>> .header-超量怪獸 {
    background: linear-gradient(90deg, #020709, #131313);
    border: 1px solid #303538;
  }

  .modal-card >>> .header-連結怪獸 {
    background: linear-gradient(90deg, #071a2e, #25415a);
    border: 1px solid #0d2238;
  }

  .modal-card >>> .header-魔法 {
    background: linear-gradient(90deg, #07451c, #23a94c);
    border: 1px solid #199f46;
  }

  .modal-card >>> .header-陷阱 {
    background: linear-gradient(90deg, #470728, #a92264);
    border: 1px solid #2b0d1f;
  }

  .arrtimg {
    width: 40px;
    height: 40px;
  }

  .imgbox img {
    width: 20%;
    margin: auto;
  }

  .n-pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 1.5rem;
  }

  @media (min-width: 640px) {
    .modal-image {
    margin-top: 100px;
  }
  }

  @media (min-width: 1400px) {

  .modal-image {
    margin-top: 50px;
  }
  .n-modal h1 {
      font-size: 2rem;
    }
  .n-modal h4 {
    white-space: pre;
    }
  .arrtimg {
    width: 76px;
    height: 76px;
  }
  .description {
  width: 100%;
  height: 500px;
  padding: 50px;
  background: black;
}
  }
</style>