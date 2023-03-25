import { defineStore } from 'pinia'
import { schoolList, schoolDelete, schoolIncrease, schoolUpdata } from '@/service/modules/school'

const useSchoolStore = defineStore('school', {
  state: () => ({
    list: [],
    count: 0
  }),
  actions: {
    //数据列表
    async listAction(data: any) {
      const res = await schoolList(data)
      this.list = res.result
      this.count = res.count
    },
    //数据删除
    async deleteAction(id: number) {
      await schoolDelete(id).then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
      })
      this.listAction({ page: 1, size: 5 })
    },
    //任务添加
    async increaseAction(data: any) {
      await schoolIncrease(data)
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
      await schoolUpdata(data)
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

export default useSchoolStore
