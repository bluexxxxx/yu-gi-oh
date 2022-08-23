<template>
  <h1>專欄管理</h1>
    <div class="container">
      <div class="decksbox">
        <n-button type="primary" @click="openDialog('', -1)">
          新增專欄
        </n-button>
      <n-modal v-model:show="showModal" preset="dialog" title="新增卡片">
          <n-form v-model="form.valid" @submit.prevent='submitForm'>
            <n-form-item label="圖片">
              <n-upload v-model:file-list='form.image' list-type="image-card">
                <n-button>點擊上傳</n-button>
              </n-upload>
            </n-form-item>
            <n-form-item label="專欄名稱">
              <n-input v-model:value='form.name' placeholder="請輸入專欄名稱"/>
            </n-form-item>
            <n-form-item label="觀念解析">
              <n-input type='textarea' autosize v-model:value='form.description' placeholder="請輸入觀念解析"/>
            </n-form-item>

            <n-form-item label="遊玩風格">
              <n-input type='textarea' autosize v-model:value='form.playstyle' placeholder="請輸入遊玩風格"/>
            </n-form-item>

            <n-form-item label="組牌邏輯">
              <n-input type='textarea' autosize v-model:value='form.decklogic' placeholder="請輸入組牌邏輯"/>
            </n-form-item>
            
            <n-form-item label="文章來源">
              <n-input v-model:value='form.article' placeholder="請輸入文章網址"/>
            </n-form-item>
            <n-button type="primary" attr-type="submit" @click="showModal=false">
              確認
            </n-button>
          </n-form>
      </n-modal>
      <n-divider/>
      <div>
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>圖片</th>
                <th>名稱</th>
                <th>描述</th>
                <th>編輯</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='(deck, idx) in sliceDecks'>
                <tr v-if='sliceDecks.length > 0' :key='deck._id'>
                  <td><img :src="deck.image" /></td>
                  <td>{{ deck.name }}</td>
                  <td style="white-space:pre">{{ deck.description }}</td>
                  <td><n-button type="info" @click="openDialog(deck._id, idx)"> 編輯 </n-button></td>
                  <td><n-button type="error" @click="del(deck._id, idx)"> 刪除 </n-button></td>
                </tr>
              </template>
            </tbody>
          </n-table>
        </n-space>
      </div>
      <n-pagination v-model:page="currentPage" :page-count="Math.ceil(decks.length / pageSize)" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
const decks = reactive([])
// form裡面要多一個 index(idx) 要修改表單內容比較方便
const showModal = ref(false);

const currentPage = ref(1)
const pageSize = 5
const sliceDecks = computed(()=> {
  return decks.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const form = reactive({
  _id: '',
  name: '',
  image: [],
  description: '',
  playstyle: '',
  decklogic:'',
  article:'',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const openDialog = (_id, idx) => {
  showModal.value = true;
  form._id = _id
  if (idx > -1) {
    form.name = decks[idx].name
    form.description = decks[idx].description
    form.playstyle = decks[idx].playstyle
    form.decklogic = decks[idx].decklogic
    form.article = decks[idx].article

  } else {
    form.name = ''
    form.description = ''
    form.article = ''
    form.playstyle = '',
    form.decklogic = ''
  }
  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  form.submitting = true

  const fd = new FormData()

  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    }
    else fd.append(key, form[key])
  }

  try {
    // 把編輯跟新增都放同一個對話框裡面 用form._id的長度判斷
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/decks', fd)
      decks.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/decks/' + form._id, fd)
      decks[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

// 刪除專欄
const del = async (_id, idx) => {
  try {
    await apiAuth.delete('/decks/' + _id)
    Swal.fire({
        icon: 'success',
        title: '成功',
        text: '刪除成功'
      })
    decks.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

// 抓所有商品
const init = async () => {
  try {
    const { data } = await apiAuth.get('/decks/all')
    decks.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
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
  .decksbox {
    margin: auto;
    width: 80%;
  }


  td {
    height: 100px;
  }

  td img {
    height: 100%;
  }

  .n-pagination {
    margin-top: 50px;
    margin-left: 500px;
  }
</style>