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
    path: '/child1/',
    meta: {
      index: '2',
      title: 'child1-home',
      icon: 'el-icon-s-home'
    }
  },

  {
    name: 'Category',
    path: '/child1/category',
    meta: {
      index: '3',
      icon: 'el-icon-s-management'
    }
  },
  {
    name: 'child1-article',
    meta: {
      title: 'Article',
      index: '4',
      icon: 'el-icon-notebook-1'
    },
    children: [
      {
        name: 'list',
        path: '/child1/article/list',
        meta: {
          index: '4-1',
          icon: 'el-icon-notebook-2'
        }
      },
      {
        name: 'editor',
        path: '/child1/article/editor',
        meta: {
          index: '4-2',
          icon: 'el-icon-edit-outline'
        }
      }
    ]
  },
  {
    name: 'child1-data',
    meta: {
      index: '5',
      title: 'Data visualization',
      icon: 'el-icon-s-marketing'
    },
    children: [
      {
        name: 'charts',
        path: '/child1/data/charts',
        meta: {
          index: '5-1',
          icon: 'el-icon-pie-chart'
        }
      },
      {
        name: 'map',
        path: '/child1/data/map',
        meta: {
          index: '5-2',
          icon: 'el-icon-guide'
        }
      }
    ]
  }
]

const child2Routes: IRoute[] = [
  {
    name: 'child2-home',
    path: '/child2/',
    meta: {
      index: '5',
      icon: 'el-icon-paperclip'
    }
  },
  {
    name: 'child2-show',
    path: '/child2/show',
    meta: {
      index: '6',
      icon: 'el-icon-s-flag'
    }
  }
]

export const microRoutes: IRoute[] = [...child1Routes, ...child2Routes]
