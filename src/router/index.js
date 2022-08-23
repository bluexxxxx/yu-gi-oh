import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '@/views/front/FrontLayout.vue'
import NotFoundView from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/front/HomeView.vue'),
          meta: {
            title: '小小卡鋪',
            login: false,
            admin: false
          }
        },

        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/front/AboutView.vue'),
          meta: {
            title: '小小卡鋪 | 關於我們',
            login: false,
            admin: false
          }
        },

        {
          path: 'newcard',
          name: 'newcard',
          component: () => import('@/views/front/NewcardView.vue'),
          meta: {
            title: '小小卡鋪 | 新卡情報',
            login: false,
            admin: false
          }
        },

        {
          path: 'deck',
          name: 'deck',
          component: () => import('@/views/front/DeckView.vue'),
          meta: {
            title: '小小卡鋪 | 主題專欄',
            login: false,
            admin: false
          }
        },

        {
          path: 'product',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: '小小卡鋪 | 商品專區',
            login: false,
            admin: false
          }
        },

        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: '小小卡鋪 | 註冊',
            login: false,
            admin: false
          }
        },

        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: '小小卡鋪 | 登入',
            login: false,
            admin: false
          }
        },

        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue'),
          meta: {
            title: '小小卡鋪 | 購物車',
            login: true,
            admin: false
          }
        },

        {
          path: 'order',
          name: 'order',
          component: () => import('@/views/front/OrderView.vue'),
          meta: {
            title: '小小卡鋪 | 訂單',
            login: true,
            admin: false
          }
        }

      ]
    },
    {
      path: '/admin',
      // 後台用AdminLayout
      component: () => import('@/views/admin/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/HomeView.vue'),
          meta: {
            title: '小小卡鋪 | 管理後台',
            login: true,
            admin: true
          }
        },

        {
          path: 'usersAdmin',
          name: 'admin-users',
          component: () => import('@/views/admin/UsersView.vue'),
          meta:{
            title:'會員管理',
            login:true,
            admin:true
          }
        },

        {
          path: 'productsAdmin',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta:{
            title:'商品管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'ordersAdmin',
          name: 'admin-orders',
          component: () => import('@/views/admin/OrdersView.vue'),
          meta:{
            title:'訂單管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'newcardsAdmin',
          name: 'admin-newcards',
          component: () => import('@/views/admin/NewcardsView.vue'),
          meta:{
            title:'新卡管理',
            login:true,
            admin:true
          }
        },

        {
          path: 'decksAdmin',
          name: 'admin-decks',
          component: () => import('@/views/admin/DecksView.vue'),
          meta:{
            title:'專欄管理',
            login:true,
            admin:true
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '小小卡鋪 | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

// router.afterEach((to, from) => {
//   document.title = to.meta.title
// })

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
