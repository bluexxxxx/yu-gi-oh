<template>
  <div class="container">
    <div class="flex_container">
      <n-form class="form_flex" ref="formRef" :model="form" :rules="rules" v-model="valid" @submit.prevent='login'>
        <h1 style="border-bottom:black solid 2px">會員登入</h1>
        <n-form-item path="account" label="帳號">
          <n-input style="width:200px" type="text" placeholder="請輸入帳號" v-model:value="form.account"></n-input>
        </n-form-item>

        <n-form-item path="password" label="密碼">
          <n-input  style="width:200px;" type="password" name="password" placeholder="請輸入密碼" v-model:value="form.password"></n-input>
        </n-form-item>
          <n-button type="primary" attr-type="submit" :loading="loading">登入</n-button>
          <h2>如果沒有帳號請按<RouterLink to="/register">註冊</RouterLink></h2>
      </n-form>
    </div>
  </div>
</template> 

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const valid = ref(false)
const loading = ref(false)


const form = reactive({
  account: null,
  password: null,
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
    })

const login = () => {
  user.login(form)
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
  height: calc(100vh - 500px);
  justify-content: center;
  align-items: center;

  border-image-source: url(../../assets/GUI_CardInfoDetail_Frame_Info2.png) ;
  border-image-slice: 27;
  border-image-width: 50px;
  border-image-outset: 0px;
  border-image-repeat: repeat;
  border-style: solid;
}

.form_flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form_flex h2 {
  color: white;
  padding-top: 20px;
}

.form_flex >>>a {
  color: aqua !important;
}


RouterLink {
  color: blue;
}



  .container >>> .n-form-item-label {
    color: white !important;
  }


  .n-form-item.n-form-item--top-labelled .n-form-item-label {
    color: white;
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

  @media (min-width:1400px) {

    .flex_container {
      width: 400px;
    }
  }
</style>