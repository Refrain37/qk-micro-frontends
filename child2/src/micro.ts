import ReactDOM from 'react-dom'
import { render } from './index'
import initMicroState from './utils/initMicroState'

const temp: any = window
export const isSingle: boolean = !temp.__POWERED_BY_QIANKUN__

export async function bootstrap() {
  console.log('[child2-app]: bootstraped')
}

export async function mount(props: any) {
  initMicroState(props)
  render()
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root') as Element)
}
