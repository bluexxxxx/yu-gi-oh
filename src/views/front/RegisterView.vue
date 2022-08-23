<template>
  <div class="container">
    <div class="flex_container">
    <n-form class="form_flex" ref="formRef" :model="form" :rules="rules" v-model="valid" @submit.prevent='register'>
      <h1 class="member-register">會員註冊</h1>
      <n-form-item path="account" label="帳號">
        <n-input type="text" style="width:200px;" placeholder="請輸入帳號" v-model:value="form.account"></n-input>
      </n-form-item>
      <n-form-item path="password" label="密碼">
        <n-input type="password" name="password" style="width:200px;" placeholder="請輸入密碼" v-model:value="form.password"></n-input>
      </n-form-item>
      <n-form-item path="email" label="信箱">
        <n-input type="email" name="email" style="width:200px;" v-model:value="form.email" placeholder="請輸入信箱"/>
      </n-form-item>
        <n-button class="rbtn"  type="primary" attr-type="submit" :loading="loading">註冊</n-button>
        <h2>如果有帳號請按<RouterLink to="/login">登入</RouterLink></h2>
    </n-form>
    </div>
  </div>
</template> 

<script setup>
import { ref, reactive } from "vue"
import { isEmail } from 'validator'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'
import Swal from "sweetalert2"

const router = useRouter()

const valid = ref(false)
const loading = ref(false)
const formRef = ref(null)

const form = reactive({
  account: null,
  password: null,
  email: null
})

const rules = reactive({
      account: [{
        required: true,
        validator (rule, value) {
          if (!value) {
            return new Error('帳號必填')
          } else if (value.length < 4 || value.length > 20) {
            return new Error('帳號長度為 4 到 20 個字')
          } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            return new Error('帳號只能有英文和數字')
          }
        },
        trigger: ["input", "blur"],
      }],
      password: [{
        required: true,
        validator (rule, value) {
          if (!value) {
            return new Error('密碼必填')
          } else if (value.length < 4 || value.length > 20) {
            return new Error('密碼長度為 4 到 20 個字')
          } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            return new Error('密碼只能有英文和數字')
          }
        },
        trigger: ["input", "blur"],
      }],
      email: [{
        required: true,
        validator (rule, value) {
          if (!value) {
            return new Error('信箱必填')
          } else if (!isEmail(value)) {
            return new Error('信箱格式錯誤')
          }
        },
        trigger: ["input", "blur"],
      }]
    })

const register = async () => {
  //  if (!valid.value) return
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  loading.value = false
}
</script>

<style scoped>
  .container {
    width: 50%;
    margin: auto;
    padding: 150px 0 0 0;
    height: calc(100vh - 268px);
  }

  .flex_container{
    display: flex;
    height: calc(100vh - 450px);
    justify-content: center;
    align-items: center;
    border-image-source: url(../../assets/GUI_CardInfoDetail_Frame_Info2.png) ;
    border-image-slice: 27 27 27 27;
    border-image-width: 50px 50px 50px 50px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: repeat repeat;
    border-style: solid;
  }

  .form_flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form_flex h2 {
  color:white;
  padding-top: 20px;
}

  .form_flex >>>a {
  color: aqua !important;
}

  .container >>> .n-form-item-label {
    color: white !important;
  }

    @media (min-width:768px) {

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .flex_container {
      width: 350px;
    }
  }

  .member-register {
    border-bottom:#404758 solid 3px;
    margin-bottom: 20px;
  }


  @media (min-width:1400px) {

    .flex_container {
      width: 400px;
    }
  }

  
</style>
