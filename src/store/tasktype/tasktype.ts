import { defineStore } from 'pinia'
import {
  tasktypeList,
  tasktypeDelete,
  tasktypeIncrease,
  tasktypeUpdata
} from '@/service/modules/tasktype'
import type { ITaskList, ITasktypeIncrease } from '@/global/style/task'
const useTasktypeStore = defineStore('tasktype', {
  state: () => ({
    list: [],
    count: 0
  }),
  actions: {
    async listAction(data: ITaskList) {
      const res = await tasktypeList(data)
      this.list = res.result
      this.count = res.count
    },
    //数据删除
    async deleteAction(id: number) {
      await tasktypeDelete(id).then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
      })
      this.listAction({ page: 1, size: 5 })
    },
    //任务添加
    async increaseAction(data: ITasktypeIncrease) {
      await tasktypeIncrease(data)
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
    async updataAction(data: ITasktypeIncrease) {
      console.log(data)
      await tasktypeUpdata(data)
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

export default useTasktypeStore
