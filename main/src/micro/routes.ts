interface IMeta {
  index: string
  icon?: string
  name?: string
  title?: string
}

export interface IRoute {
  name: string
  path?: string
  meta?: IMeta
  children?: IRoute[]
}

const child1Routes: IRoute[] = [
  {
    name: 'child1-home',
    meta: {
      index: '2',
      title: 'child1-home',
      icon: 'el-icon-upload'
    },
    children: [
      {
        name: 'child1',
        path: '/child1/',
        meta: {
          index: '2-1',
          icon: 'el-icon-picture-outline'
        }
      },
      {
        name: 'child1-bbb',
        path: '/child1/bbb',
        meta: {
          index: '2-2',
          icon: 'el-icon-picture'
        }
      }
    ]
  },
  {
    name: 'child1-data',
    meta: {
      index: '3',
      title: 'Data visualization',
      icon: 'el-icon-s-marketing'
    },
    children: [
      {
        name: 'charts',
        path: '/child1/data/charts',
        meta: {
          index: '3-1',
          icon: 'el-icon-pie-chart'
        }
      },
      {
        name: 'map',
        path: '/child1/data/map',
        meta: {
          index: '3-2',
          icon: 'el-icon-guide'
        }
      }
    ]
  },
  {
    name: 'child1-test',
    path: '/child1/test',
    meta: {
      index: '3',
      icon: 'el-icon-s-management'
    }
  }
]

const child2Routes: IRoute[] = [
  {
    name: 'child2-home',
    path: '/child2/',
    meta: {
      index: '4',
      icon: 'el-icon-paperclip'
    }
  },
  {
    name: 'child2-show',
    path: '/child2/show',
    meta: {
      index: '5',
      icon: 'el-icon-s-flag'
    }
  }
]

export const microRoutes: IRoute[] = [...child1Routes, ...child2Routes]
