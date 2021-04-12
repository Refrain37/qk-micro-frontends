import { render } from './main'

const temp: any = window
const isQiankun = temp.__POWERED_BY_QIANKUN__

export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
}

export async function mount(props: any) {
  console.log(props)
  render()
}

export async function unmount(props: any) {
  console.log(props)
}

isQiankun || render()
