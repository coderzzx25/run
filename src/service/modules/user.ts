import zxRequest from '..'
import type { IUserList } from '@/global/style/user'
export function getUserList() {
  return zxRequest.get({
    url: '/user/list'
  })
}
//用户列表
export function userList(data: IUserList) {
  return zxRequest.post({
    url: '/user/userlist',
    data
  })
}
//用户删除
export function userDelete(id: number) {
  return zxRequest.delete({
    url: `/user/userdelete/${id}`
  })
}
//用户添加
export function userIncrease(data: any) {
  return zxRequest.post({
    url: '/user/userincrease',
    data
  })
}
//用户修改
export function userUpdata(data: any) {
  return zxRequest.post({
    url: '/user/userupdata',
    data
  })
}
