import { IRoute, microRoutes } from '../config/micro'
import { routes as mainRoutes } from '../router'
import blackList from '../config/routeBlackList'

export function getRoutes(): IRoute[] {
  const routes: IRoute[] = mainRoutes
    .map(item => {
      return {
        name: item.name,
        path: item.path,
        meta: item.meta,
        children: item.children
      }
    })
    .filter(item => !blackList.includes(item.name as string)) as IRoute[]

  return [...routes, ...microRoutes]
}
