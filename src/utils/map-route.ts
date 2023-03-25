import type { RouteRecordRaw } from 'vue-router'

const loadLoaclRoutes = () => {
  //动态获取所有路由对象，放到数组中
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })
  //将加载对象放到localRoutes
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}
//获取第一个菜单
export let firstMenu: any = null
export const mapMenusToRoutes = (userMenus: any[]) => {
  //动态获取所有路由对象，放到数组中
  const localRoutes = loadLoaclRoutes()

  //根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const children of menu.children) {
      const route = localRoutes.find((item) => item.path === children.url)
      if (route) routes.push(route)
      //第一个路由
      if (!firstMenu && route) firstMenu = children
    }
  }
  return routes
}
//计算第一个路由
export const mapPathToMenu = (path: string, userMenus: any[]) => {
  for (const item of userMenus) {
    for (const children of item.children) {
      if (path === children.url) {
        return children
      }
    }
  }
}
