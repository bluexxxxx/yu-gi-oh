<template>
  <h1>商品管理</h1>
  <div class="container">
    <div class="productsbox">
      <n-button type="primary" @click="openDialog('', -1)">
        新增商品
      </n-button>
      <n-modal v-model:show="showModal" preset="dialog" title="新增商品">
          <n-form v-model="form.valid" @submit.prevent='submitForm'>
            <n-form-item label="圖片">
              <n-upload v-model:file-list='form.image' list-type="image-card">
                  <n-button>點擊上傳</n-button>
              </n-upload>
            </n-form-item>
            <n-form-item label="商品名稱">
              <n-input v-model:value='form.name' placeholder="請輸入商品名稱"/>
            </n-form-item>
            <n-form-item label="商品價格">
              <n-input-number v-model:value='form.price' placeholder="請輸入商品價格" />
            </n-form-item>
            <h4>請選擇商品類型</h4>
            <n-select v-model:value="form.category" :options="options" />
            <n-form-item label="商品描述">
              <n-input v-model:value='form.description' placeholder="請輸入商品描述"/>
            </n-form-item>
            <n-form-item label="上架">
              <n-switch v-model:value='form.sell'/>是否上架
            </n-form-item>
            <n-button type="primary" attr-type="submit" @click="showModal=false">
              確認
            </n-button>
        </n-form>
      </n-modal>
      <n-divider />
      <div>
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>圖片</th>
                <th>名稱</th>
                <th>價格</th>
                <th>描述</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='(product, idx) in sliceProducts'>
                <tr v-if='sliceProducts.length > 0' :key='product._id'>
                  <td>
                      <n-avatar :size="100" object-fit="contain" color="rgba(255, 255, 255, 0)" :src="product.image" />
                    </td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.description }}</td>
                  <td><n-button type="info" @click="openDialog(product._id, idx)" :loading="loading"> 編輯 </n-button></td>
                </tr>
              </template>
            </tbody>
          </n-table>
        </n-space>
      </div>
      <n-pagination v-model:page="currentPage" :page-count="Math.ceil(products.length / pageSize)" />
    </div>
  </div>

</template>

<script setup>
import { reactive, ref, computed } from "vue";
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
const products = reactive([])
const loading = ref(false)
// form裡面要多一個 index(idx) 要修改表單內容比較方便
const showModal = ref(false)

const currentPage = ref(1)
const pageSize = 10
const sliceProducts = computed(()=> {
  return products.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const options = [
  {
    label: "大盒",
    value: "大盒"
  },
    {
    label: "小盒",
    value: "小盒"
  }
]
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: [],
  description: '',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const openDialog = (_id, idx) => {
  showModal.value = true;
  form._id = _id
  if (idx > -1) {
    form.name = products[idx].name
    form.price = products[idx].price
    form.category = products[idx].category
    form.description = products[idx].description
    form.sell = products[idx].sell

  } else {
    form.name = ''
    form.price = 0
    form.category = ''
    form.description = ''
    form.sell = false
  }
  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  // if (!form.valid) return
  form.submitting = true
  loading.value = true
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
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
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
  loading.value = false
}

// 抓所有商品
const init = async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
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
  .productsbox {
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
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 1.5rem;
  }
</style>