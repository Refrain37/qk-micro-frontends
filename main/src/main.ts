import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'

import ElementPlus from './utils/element'

import './styles/index.scss'
import { microInit } from './micro/index'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')

microInit()
