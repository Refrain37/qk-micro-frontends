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
    path: '/child1/',
    meta: {
      index: '2'
    },
    children: [
      {
        name: 'child1-zzz',
        path: '/child1/zzz',
        meta: {
          index: '2-1'
        }
      }
    ]
  },
  {
    name: 'child1-test',
    path: '/child1/test',
    meta: {
      index: '3'
    }
  }
]

const child2Routes: IRoute[] = [
  {
    name: 'child2-home',
    path: '/child2/',
    meta: {
      index: '4'
    }
  },
  {
    name: 'child2-show',
    path: '/child2/show',
    meta: {
      index: '5'
    }
  }
]

export const microRoutes: IRoute[] = [...child1Routes, ...child2Routes]
