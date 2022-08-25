<template>
  <h1>新卡管理</h1>
  <div class="container">
    <div class="newcardsbox">
      <n-button type="primary" @click="openDialog('', -1)">
        新增卡片
      </n-button>
      <n-modal v-model:show="showModal" preset="dialog">
        <h2>{{ form._id.length > 0 ? '編輯新卡' : '新增新卡' }} </h2> 
        <n-form v-model="form.valid" @submit.prevent='submitForm'>
            <n-form-item label="圖片">
              <n-upload v-model:file-list='form.image' list-type="image-card">
                <n-button>點擊上傳</n-button>
              </n-upload>
            </n-form-item>
            <n-form-item label="卡片名稱">
              <n-input v-model:value='form.name' placeholder="請輸入卡片名稱"/>
            </n-form-item>
            <n-form-item label="卡片描述">
              <n-input style="white-space:pre;" type='textarea' autosize v-model:value='form.description' placeholder="請輸入卡片描述"/>
            </n-form-item>
            <h4>請選擇卡片種類</h4>
            <n-select v-model:value="form.type" :options="types" />
            <h4>請選擇卡片屬性</h4>
            <n-select v-model:value="form.attr" :options="attrs" />
            <n-button type="primary" attr-type="submit" @click="showModal=false">
              確認
            </n-button>
        </n-form>
      </n-modal>
      <n-divider />
      <div>
        <n-space vertical>
          <n-table striped size="small">
            <thead>
              <tr>
                <th>圖片</th>
                <th>名稱</th>
                <th>描述</th>
                <th>種類</th>
                <th>屬性</th>
                <th >編輯</th>
                <th >刪除</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='(newcard, idx) in sliceNewcards'>
                <tr v-if='sliceNewcards.length > 0' :key='newcard._id'>
                  <td><img :src="newcard.image" /></td>
                  <td>{{ newcard.name }}</td>
                  <td style="white-space:pre">{{ newcard.description }}</td>
                  <td>{{newcard.type}}</td>
                  <td>{{newcard.attr}}</td>

                  <td v-if="currentPage === 1"><n-button type="info" @click="openDialog(newcard._id, idx)" :loading="loading"> 編輯 </n-button></td>
                  <td v-if="currentPage > 1"><n-button type="info" @click="openDialog(newcard._id, idx + ((currentPage-1) * pageSize))" :loading="loading"> 編輯 </n-button></td>

                  <td v-if="currentPage === 1"><n-button type="error" @click="del(newcard._id, idx)" :loading="loading"> 刪除 </n-button></td>
                  <td v-if="currentPage > 1"><n-button type="error" @click="del(newcard._id, idx + ((currentPage-1) * pageSize))" :loading="loading"> 刪除 </n-button></td>
                </tr>
              </template>
            </tbody>
          </n-table>
        </n-space>
      </div>
      <n-pagination v-model:page="currentPage" :page-count="Math.ceil(newcards.length / pageSize)" />
    </div>
  </div>
  
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const currentPage = ref(1)
const pageSize = 10
const sliceNewcards = computed(()=> {
  return newcards.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const types = [
  {
    label: "通常怪獸",
    value: "通常怪獸"
  },
  {
    label: "效果怪獸",
    value: "效果怪獸"
  },
  {
    label: "儀式怪獸",
    value: "儀式怪獸"
  },
  {
    label: "融合怪獸",
    value: "融合怪獸"
  },
  {
    label: "同步怪獸",
    value: "同步怪獸"
  },
  {
    label: "超量怪獸",
    value: "超量怪獸"
  },
  {
    label: "連結怪獸",
    value: "連結怪獸"
  },
  {
    label: "魔法",
    value: "魔法"
  },
  {
    label: "陷阱",
    value: "陷阱"
  }
]

const attrs = [
  {
    label: "光",
    value: "光"
  },
  {
    label: "暗",
    value: "暗"
  },
  {
    label: "水",
    value: "水"
  },
  {
    label: "炎",
    value: "炎"
  },
  {
    label: "地",
    value: "地"
  },
  {
    label: "風",
    value: "風"
  },
  {
    label: "神",
    value: "神"
  },
  {
    label: "魔",
    value: "魔"
  },
  {
    label: "罠",
    value: "罠"
  },
]

const newcards = reactive([])
// form裡面要多一個 index(idx) 要修改表單內容比較方便
const showModal = ref(false);


// 刪除卡片情報
const del = async (_id, idx) => {
  try {
    await apiAuth.delete('/newcards/' + _id)
    Swal.fire({
        icon: 'success',
        title: '成功',
        text: '刪除成功'
      })
    newcards.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const form = reactive({
  _id: '',
  name: '',
  image: [],
  description: '',
  type:'',
  attr:'',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const openDialog = (_id, idx) => {
  showModal.value = true;
  form._id = _id
  if (idx > -1) {
    form.name = newcards[idx].name
    form.description = newcards[idx].description
    form.type = newcards[idx].type
    form.attr = newcards[idx].attr

  } else {
    form.name = ''
    form.description = ''
    form.type = ''
    form.attr = ''
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
    } else {
      fd.append(key, form[key])
    }
  }
  try {
    // 把編輯跟新增都放同一個對話框裡面 用form._id的長度判斷
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/newcards', fd)
      newcards.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/newcards/' + form._id, fd)
      newcards[form.idx] = data.result
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


// 抓所有商品
const init = async () => {
  try {
    const { data } = await apiAuth.get('/newcards/all')
    newcards.push(...data.result)
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
  .newcardsbox {
    margin: auto;
    width: 80%;
  }

  .n-table th{
    text-align: center;
  }


  td {
    height: 100px;
  }

  td img {
    height: 100%;
  }

  .n-pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 1.5rem;
  }
</style>