/* initial state value */
export interface IMicroState {
  user: string
  token: string | null
  userInfo: string | null
}

export const microState: IMicroState = {
  user: 'qiankun',
  token: null,
  userInfo: null
}

/* micro-app routes */
interface IMeta {
  index: string
  icon?: string
  name?: string
}

export interface IRoute {
  name: string
  path?: string
  meta: Object
  children?: IRoute[]
}

const child1Routes: IRoute[] = [
  {
    name: 'child1-home',
    meta: {
      index: '2',
      title: 'child1-home',
      icon: 'el-icon-tickets'
    },
    children: [
      {
        name: 'child1',
        path: '/child1/',
        meta: {
          index: '2-1',
          icon: 'el-icon-tickets'
        }
      },
      {
        name: 'child1-bbb',
        path: '/child1/bbb',
        meta: {
          index: '2-2',
          icon: 'el-icon-tickets'
        }
      }
    ]
  },
  {
    name: 'child1-test',
    path: '/child1/test',
    meta: {
      index: '3',
      icon: 'el-icon-tickets'
    }
  }
]

const child2Routes: IRoute[] = [
  {
    name: 'child2-home',
    path: '/child2/',
    meta: {
      index: '4',
      icon: 'el-icon-tickets'
    }
  },
  {
    name: 'child2-show',
    path: '/child2/show',
    meta: {
      index: '5',
      icon: 'el-icon-tickets'
    }
  }
]

export const microRoutes: IRoute[] = [...child1Routes, ...child2Routes]
