import { defineStore } from 'pinia'
import { tasktypeData } from '@/service/modules/data'

const useDataStore = defineStore('data', {
  state: () => ({
    tasktypeData: []
  }),
  actions: {
    async homeDataActions() {
      const { result } = await tasktypeData()
      this.tasktypeData = result
    }
  }
})

export default useDataStore
