import { defineStore } from 'pinia'
import {
  usertypeList,
  usertypeDelete,
  usertypeIncrease,
  usertypeUpdata
} from '@/service/modules/usertype'
import type { IUserList } from '@/global/style/user'

const useUsertypeStore = defineStore('usertype', {
  state: () => ({
    list: [],
    count: 0
  }),
  actions: {
    async listAction(data: IUserList) {
      const res = await usertypeList(data)
      this.list = res.result
      this.count = res.count
    },
    //数据删除
    async deleteAction(id: number) {
      await usertypeDelete(id).then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
      })
      this.listAction({ page: 1, size: 5 })
    },
    //任务添加
    async increaseAction(data: any) {
      await usertypeIncrease(data)
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
    async updataAction(data: any) {
      console.log(data)
      await usertypeUpdata(data)
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

export default useUsertypeStore
