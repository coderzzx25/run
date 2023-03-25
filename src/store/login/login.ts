import { defineStore } from 'pinia'
import { userLogin, userInfo, userMenu } from '@/service/modules/login'
import type { IUserLogin } from '@/global/style/login'
import { localCache } from '@/utils/cache'
import { useRoute, type RouteRecordRaw } from 'vue-router'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-route'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache('token') ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenu: localCache.getCache('userMenu') ?? []
  }),
  actions: {
    async userLoginAction(data: IUserLogin) {
      const loginRes = await userLogin(data)
      this.token = loginRes.data.token
      //用户id
      const id = loginRes.data.id
      //缓存token
      localCache.setCache('token', this.token)

      //获取用户信息
      const userInfoRes = await userInfo(id)
      this.userInfo = userInfoRes.data
      localCache.setCache('userInfo', this.userInfo)

      //获取用户菜单
      const userMenuRes = await userMenu(this.userInfo?.power)
      const userMenus = userMenuRes.data
      this.userMenu = userMenus
      localCache.setCache('userMenu', this.userMenu)

      //动态路由
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((item) => router.addRoute('main', item))
      //页面跳转
      const route = useRoute()
      let redirect = route?.query?.redirect || '/main'
      if (typeof redirect !== 'string') redirect = '/main'
      router.replace(redirect)
    },
    localLoaclCacheAction() {
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenu')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenu = userMenus
        //动态路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((item) => router.addRoute('main', item))
      }
    }
  }
})
export default useLoginStore
