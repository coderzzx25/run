import { computed } from 'vue'
import useMainStore from '@/store/main/main'
const dialogConfig = {
  colSpan: { span: 24 },
  formItems: [
    {
      prop: 'name',
      type: 'input',
      initialValue: '',
      placeholder: '请输入角色名'
    },
    {
      prop: 'role',
      type: 'custom',
      initialValue: [],
      menulist: []
    }
  ]
}
const mainStore = useMainStore()
mainStore.AllListAction()
const dialogConfigRef = computed(() => {
  const menu = mainStore.menuList
  dialogConfig.formItems.forEach((item: any) => {
    if (item.prop === 'role') {
      item.menulist = menu
    }
  })

  return dialogConfig
})

export default dialogConfigRef
