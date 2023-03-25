import zxRequest from '..'

export function getSchoolList() {
  return zxRequest.get({
    url: '/school/list'
  })
}
//学校列表
export function schoolList(data: any) {
  return zxRequest.post({
    url: '/school/schoollist',
    data
  })
}
//学校删除
export function schoolDelete(id: number) {
  return zxRequest.delete({
    url: `/school/schooldelete/${id}`
  })
}
//学校添加
export function schoolIncrease(data: any) {
  return zxRequest.post({
    url: '/school/schoolincrease',
    data
  })
}
//学校修改
export function schoolUpdata(data: any) {
  return zxRequest.post({
    url: '/school/schoolupdata',
    data
  })
}
