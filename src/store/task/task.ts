import { defineStore } from 'pinia'
import { taskList, taskDelete, taskIncrease, taskUpdata } from '@/service/modules/task'
import type { ITaskList, ITaskIncrease } from '@/global/style/task'

const useTaskStore = defineStore('task', {
  state: () => ({
    list: [],
    count: 0
  }),
  actions: {
    //数据列表
    async listAction(data: ITaskList) {
      const res = await taskList(data)
      this.list = res.result
      this.count = res.count
    },
    //数据删除
    async deleteAction(id: number) {
      await taskDelete(id).then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
      })
      this.listAction({ page: 1, size: 5 })
    },
    //任务添加
    async increaseAction(data: ITaskIncrease) {
      await taskIncrease(data)
        .then(() => {
          ElMessage({
            type: 'success',
            message: '添加成功'
          })
        })
        .catch(() => {
          ElMessage({
            type: 'success',
            message: '添加失败'
          })
        })
      this.listAction({ page: 1, size: 5 })
    },
    //任务修改
    async updataAction(data: ITaskIncrease) {
      await taskUpdata(data)
        .then(() => {
          ElMessage({
            type: 'success',
            message: '修改成功'
          })
        })
        .catch(() => {
          ElMessage({
            type: 'success',
            message: '修改失败'
          })
        })
      this.listAction({ page: 1, size: 5 })
    }
  }
})
export default useTaskStore
