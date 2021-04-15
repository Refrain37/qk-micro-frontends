import ReactDOM from 'react-dom'
import { render } from './index'

const temp = window
export const isSingle = !temp.__POWERED_BY_QIANKUN__

export async function bootstrap() {
    console.log('[child2-app]: bootstraped')
}

export async function mount(props) {
    render(props)
}

export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}