import zxRequest from '..'

export function getMenuList() {
  return zxRequest.get({
    url: '/menu/list'
  })
}
//菜单列表
export function menuList(data: any) {
  return zxRequest.post({
    url: '/menu/menulist',
    data
  })
}
//菜单删除
export function menuDelete(id: number) {
  return zxRequest.delete({
    url: `/menu/menudelete/${id}`
  })
}
//菜单添加
export function menuIncrease(data: any) {
  return zxRequest.post({
    url: '/menu/menuincrease',
    data
  })
}
//菜单修改
export function menuUpdata(data: any) {
  return zxRequest.post({
    url: '/menu/menuupdata',
    data
  })
}

//一级菜单
export function menuOne() {
  return zxRequest.get({
    url: '/menu/firstmenu'
  })
}
