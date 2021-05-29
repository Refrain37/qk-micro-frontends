import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { isSingle } from './micro'
export { bootstrap, mount, unmount } from './micro'
import './styles/index.scss'

import VueMarkdownEditor from './utils/markdownEditor'

export function render(props: any = {}) {
  const { container } = props
  createApp(App)
    .use(store)
    .use(router)
    .use(VueMarkdownEditor)
    .mount(
      container
        ? container.querySelector('#child1-container')
        : '#child1-container'
    )
}

// 独立运行时
if (isSingle) {
  render()
}
