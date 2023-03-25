import { computed } from 'vue'
import useMainStore from '@/store/main/main'

interface IDialogFormItem {
  prop: string
  type: string
  initialValue: string | number
  placeholder: string
  options?: { label: string; value: number }[]
  disabled?: boolean
}

interface IDialogConfig {
  colSpan?: { span: number }
  formItems: IDialogFormItem[]
}
const dialogConfig: IDialogConfig = {
  colSpan: { span: 24 },
  formItems: [
    {
      prop: 'name',
      type: 'input',
      initialValue: '',
      placeholder: '请输入角色名'
    },
    {
      prop: 'url',
      type: 'input',
      initialValue: '',
      placeholder: '请输入路径名'
    },
    {
      prop: 'icon',
      type: 'input',
      initialValue: '',
      placeholder: '请输入图标名'
    },
    {
      prop: 'type',
      type: 'select',
      initialValue: '',
      placeholder: '请选择菜单层级',
      options: [
        { label: '一级菜单', value: 1 },
        { label: '二级菜单', value: 2 }
      ]
    },
    {
      prop: 'sort',
      type: 'select',
      initialValue: '',
      placeholder: '请选择上一级菜单',
      options: []
    }
  ]
}

const mainStore = useMainStore()
mainStore.AllListAction()
const dialogConfigRef = computed(() => {
  const firstmenu = mainStore.menuOneList.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  dialogConfig.formItems.forEach((item: any) => {
    if (item.prop === 'sort') {
      item.options?.push(...firstmenu)
    }
  })

  return dialogConfig
})
export default dialogConfigRef
