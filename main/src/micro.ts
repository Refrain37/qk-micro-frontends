import { ObjectType, registerMicroApps, RegistrableApp, start } from 'qiankun'

const routerConfig:RegistrableApp<ObjectType>[] = [{
    name: 'child1',
    entry: '//localhost:8081',
    container:'#subapp-container',
    activeRule: '/child1'
},
{
    name: 'child2',
    entry: '//localhost:8082',
    container:'#subapp-container',
    activeRule: '/child2'
}
]

export function microInit() {
    registerMicroApps(routerConfig)
    start()
}