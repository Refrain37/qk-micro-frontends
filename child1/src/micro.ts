import { render } from './main'
import registerMicroStateModule from './store/modules/microState'

const temp: any = window
export const isSingle: boolean = !temp.__POWERED_BY_QIANKUN__

export async function bootstrap() {
  console.log('[child1-app]: bootstraped')
}

export async function mount(props: any) {
  registerMicroStateModule(props) // 注册microState模块
  render(props)
}

export async function unmount(props: any) {}
