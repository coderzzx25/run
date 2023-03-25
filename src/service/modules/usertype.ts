import zxRequest from '..'
import type { IUserList } from '@/global/style/user'

export function getUsertypeList() {
  return zxRequest.get({
    url: '/usertype/list'
  })
}
//用户类型列表
export function usertypeList(data: IUserList) {
  return zxRequest.post({
    url: '/usertype/usertypelist',
    data
  })
}
//用户类型删除
export function usertypeDelete(id: number) {
  return zxRequest.delete({
    url: `/usertype/usertypedelete/${id}`
  })
}
//用户类型添加
export function usertypeIncrease(data: any) {
  return zxRequest.post({
    url: '/usertype/usertypeincrease',
    data
  })
}
//用户类型修改
export function usertypeUpdata(data: any) {
  return zxRequest.post({
    url: '/usertype/usertypeupdata',
    data
  })
}
