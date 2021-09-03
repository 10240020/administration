import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/Public/Font/font.sass'
import '@/Public/customCass/custom.sass'

let app =  createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
