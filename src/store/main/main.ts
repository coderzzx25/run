import { defineStore } from 'pinia'
import { getSchoolList } from '@/service/modules/school'
import { getUserList } from '@/service/modules/user'
import { typeList } from '@/service/modules/task'
import { getUsertypeList } from '@/service/modules/usertype'
import { getMenuList, menuOne } from '@/service/modules/menu'

const useMainStore = defineStore('main', {
  state: () => ({
    schoolList: [],
    userList: [],
    tasktypeList: [],
    usertypeList: [],
    menuList: [],
    menuOneList: []
  }),
  actions: {
    async AllListAction() {
      const school = await getSchoolList()
      const user = await getUserList()
      const tasktype = await typeList()
      const usertype = await getUsertypeList()
      const menu = await getMenuList()
      const firstmenu = await menuOne()
      this.schoolList = school.result
      this.userList = user.result
      this.tasktypeList = tasktype.result
      this.usertypeList = usertype.result
      this.menuList = menu.result
      this.menuOneList = firstmenu.result
    }
  }
})

export default useMainStore
