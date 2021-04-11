interface IRoute{
  name:string,
  path:string
}

const child1Router:IRoute[] = [{
  name:'child1-home',
  path:'/child1/'
},
{
  name:'child1-test',
  path:'/child1/test'
}]

const child2Router:IRoute[] = [{
  name:'child2-home',
  path:'/child2/'
},
{
  name:'child2-test',
  path:'/child2/test'
}
]

export const routerMap:IRoute[] = [...child1Router,...child2Router]