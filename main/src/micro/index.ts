import { ObjectType, registerMicroApps, RegistrableApp, start } from 'qiankun'
import { getGlobalState } from './state'

const routerConfig: RegistrableApp<ObjectType>[] = [
  {
    name: 'child1',
    entry: '//localhost:8081',
    container: '#subapp-container',
    activeRule: '/child1',
    props: {
      getGlobalState
    }
  },
  {
    name: 'child2',
    entry: '//localhost:8082',
    container: '#subapp-container',
    activeRule: '/child2',
    props: {
      getGlobalState
    }
  }
]

export function microInit() {
  registerMicroApps(routerConfig)
  start()
}
