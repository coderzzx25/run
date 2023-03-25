import { defineStore } from 'pinia'
import { menuList, menuDelete, menuIncrease, menuUpdata } from '@/service/modules/menu'

const useMenuStore = defineStore('menu', {
  state: () => ({
    list: [],
    count: 0
  }),
  actions: {
    //数据列表
    async listAction(data: any) {
      const res = await menuList(data)
      this.list = res.result
      this.count = res.count
    },
    //数据删除
    async deleteAction(id: number) {
      await menuDelete(id).then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
      })
      this.listAction({ page: 1, size: 5 })
    },
    //任务添加
    async increaseAction(data: any) {
      await menuIncrease(data)
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
      await menuUpdata(data)
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

export default useMenuStore
