import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

function render(props: any = {}) {
  const { container } = props
  createApp(App)
    .use(store)
    .use(router)
    .mount(
      container
        ? container.querySelector('#child1-container')
        : '#child1-container'
    )
}

// 独立运行时
const temp: any = window
const isQiankun = temp.__POWERED_BY_QIANKUN__
isQiankun || render()

export async function bootstrap() {
  console.log('[child1-app]: bootstraped')
}

export async function mount(props: any) {
  const { getGlobalState, setGlobalState } = props
  setGlobalState({ user: 'qiankun-child1', age: 18 })
  render(props)
}

export async function unmount(props: any) {}
