import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance:any = null

function render (props:any = {}) {
  const { container } = props
  instance = createApp(App)
    .use(store)
    .use(router)
    .mount(container ? container.querySelector('#child1-container') : '#child1-container')
}

// 独立运行时
const temp: any = window;
const isQiankun = temp.__POWERED_BY_QIANKUN__
isQiankun || render();

export async function bootstrap () {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
}

export async function mount(props: any) {
  console.log(props)
  render(props)
}

export async function unmount(props: any) {
}
