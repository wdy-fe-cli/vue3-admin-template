import { createApp } from 'vue'
import App from './App.vue'
// 全局组件
import components from '@/components/index.js'
// 页面样式
import '@/styles/index.scss'
import '@/styles/tailwind.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// svg-icons
import 'virtual:svg-icons-register'
//  vue router
import router from './router'
// vue i18n
import I18n from '@/languages/index'
// pinia store
import pinia from '@/store'
// errorHandler
import errorHandler from '@/utils/errorHandler'
import directives from '@/directives/index'

const app = createApp(App)

app.config.errorHandler = errorHandler
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
  app.component(key, component)
})

app.use(pinia).use(directives).use(I18n).use(components).use(router).mount('#app')
