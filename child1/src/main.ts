import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

export function render() {
  createApp(App).use(store).use(router).mount('#child1-container')
}

const temp: any = window;
const isQiankun = temp.__POWERED_BY_QIANKUN__

isQiankun || render();

export async function bootstrap () {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
}

export async function mount(props: any) {
  console.log(props)
  render()
}

export async function unmount(props: any) {
  console.log(props)
}
