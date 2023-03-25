import zxRequest from '..'
import type { ITaskList, ITasktypeIncrease } from '@/global/style/task'
//任务类型列表
export function tasktypeList(data: ITaskList) {
  return zxRequest.post({
    url: '/tasktype/tasktypelist',
    data
  })
}
//任务删除
export function tasktypeDelete(id: number) {
  return zxRequest.delete({
    url: `/tasktype/tasktypedelete/${id}`
  })
}
//任务添加
export function tasktypeIncrease(data: ITasktypeIncrease) {
  return zxRequest.post({
    url: '/tasktype/tasktypeincrease',
    data
  })
}
//任务修改
export function tasktypeUpdata(data: ITasktypeIncrease) {
  return zxRequest.post({
    url: '/tasktype/tasktypeupdata',
    data
  })
}
