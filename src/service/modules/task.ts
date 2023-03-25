import zxRequest from '..'
import type { ITaskList, ITaskIncrease } from '@/global/style/task'

//任务列表
export function taskList(data: ITaskList) {
  return zxRequest.post({
    url: '/task/tasklist',
    data
  })
}
//任务删除
export function taskDelete(id: number) {
  return zxRequest.delete({
    url: `/task/taskdelete/${id}`
  })
}
//任务添加
export function taskIncrease(data: ITaskIncrease) {
  return zxRequest.post({
    url: '/task/taskincrease',
    data
  })
}
//任务修改
export function taskUpdata(data: ITaskIncrease) {
  return zxRequest.post({
    url: '/task/taskupdata',
    data
  })
}
//任务类型
export function typeList() {
  return zxRequest.get({
    url: '/task/typelist'
  })
}
