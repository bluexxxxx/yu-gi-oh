<template>
  <div class="mg-t">
    <n-menu v-model:value="activeKey" :options="menuOptions" />
  </div>
  <RouterView></RouterView>
  <n-back-top :right="100"  :visibility-height="10"/>
</template>


<script setup>
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '@/stores/user'
import { h,ref, reactive } from "vue";
import { RouterLink } from "vue-router";


// const user = useUserStore()
// const { avatar, account } = storeToRefs(user)
const  activeKey = ref(null)

const menuOptions = reactive([
  {
    label: () => h(RouterLink, {
      to: {
        path: "/"
      }
    }, { default: () => "回首頁" }),
    key: "back"
  },

  {
    label: () => h(RouterLink, {
      to: {
        path: "/admin/UsersAdmin"
      }
    }, { default: () => "會員管理" }),
    key: "user"
  },

  {
    label: () => h(RouterLink, {
      to:{ 
        path:"/admin/productsAdmin"
        }
    }, {default:()=>"商品管理"}),
    key: "products"
  },

  {
    label: () => h(RouterLink, {
      to: {
        path:"/admin/ordersAdmin"
      }
    }, { default: () => "訂單管理" }),
    key: "orders"
  },

  {
    label: () => h(RouterLink, {
      to: {
        path:"/admin/newcardsAdmin"
      }
    }, { default: () => "新卡管理" }),
    key: "newcards"
  },

  {
    label: () => h(RouterLink, {
      to: {
        path:"/admin/decksAdmin"
      }
    }, { default: () => "專欄管理" }),
    key: "decks"
  }

])

</script>

<style scoped>
.mg-t {
  margin-top: 2%;
}

.n-layout-header {
  padding: 24px;
}
.image{
  width:100px;
  height:100px;
}
nav{
  position:absolute;
  right:0;
  top:50%;
}


.n-menu {
  position: fixed;
  width: 178px;
  height: 100vh;
  top: 10%;
  left: 0;
  color: white !important;
}




.n-menu>>> a {
  font-size: 1.5rem;
}


h1 {
  color: white;
}

</style>