import zxRequest from '..'
import type { IUserLogin } from '@/global/style/login'
//用户登录
export function userLogin(data: IUserLogin) {
  return zxRequest.post({
    url: '/login',
    data
  })
}

//获取用户信息
export function userInfo(id: number) {
  return zxRequest.get({
    url: `/login/users/${id}`
  })
}

//获取用户菜单
export function userMenu(id: number) {
  return zxRequest.get({
    url: `/login/users/${id}/menu`
  })
}
