import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './plugins/pinia'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')

// router跳回頂端
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})