import { computed } from 'vue'
import useMainStore from '@/store/main/main'
const dialogConfig = {
  colSpan: { span: 24 },
  formItems: [
    {
      prop: 'outset',
      type: 'input',
      initialValue: '',
      placeholder: '请输入起点'
    },
    {
      prop: 'end',
      type: 'input',
      initialValue: '',
      placeholder: '请输入终点'
    },
    {
      prop: 'content',
      type: 'input',
      initialValue: '',
      placeholder: '请输入内容'
    },
    {
      prop: 'remark',
      type: 'input',
      initialValue: null,
      placeholder: '请输入备注'
    },
    {
      prop: 'school',
      type: 'select',
      initialValue: '',
      placeholder: '请选择学校',
      options: []
    },
    {
      prop: 'creator',
      type: 'select',
      initialValue: '',
      placeholder: '请选择创建者',
      options: []
    },
    {
      prop: 'receiver',
      type: 'select',
      initialValue: null,
      placeholder: '请选择接收者',
      options: []
    },
    {
      prop: 'type',
      type: 'select',
      initialValue: '',
      placeholder: '请选择类型',
      options: []
    },
    {
      prop: 'sum',
      type: 'input',
      initialValue: '',
      placeholder: '请输入赏金'
    }
  ]
}

const mainStore = useMainStore()
mainStore.AllListAction()
const dialogConfigRef = computed(() => {
  const school = mainStore.schoolList.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  const creatoruser = mainStore.userList.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  const receiveruser = mainStore.userList.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  const tasktype = mainStore.tasktypeList.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  dialogConfig.formItems.forEach((item: any) => {
    if (item.prop === 'school') {
      item.options?.push(...school)
    } else if (item.prop === 'creator') {
      item.options?.push(...creatoruser)
    } else if (item.prop === 'receiver') {
      item.options?.push(...receiveruser)
    } else if (item.prop === 'type') {
      item.options?.push(...tasktype)
    }
  })

  return dialogConfig
})

export default dialogConfigRef
