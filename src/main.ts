import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementPlus).use(router).mount('#app')

Object.keys(Icons).forEach(key =>  app.component(key, Icons[key as keyof typeof Icons]))