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
export interface IRoute {
  name: string
  path: string
}

const child1Routes: IRoute[] = [
  {
    name: 'child1-home',
    path: '/child1/'
  },
  {
    name: 'child1-test',
    path: '/child1/test'
  }
]

const child2Routes: IRoute[] = [
  {
    name: 'child2-home',
    path: '/child2/'
  },
  {
    name: 'child2-show',
    path: '/child2/show'
  }
]

export const microRoutes: IRoute[] = [...child1Routes, ...child2Routes]
