import { computed } from 'vue'
import useMainStore from '@/store/main/main'
const dialogConfig = {
    colSpan: { span: 24 },
    formItems: [
        {
            prop: 'name',
            type: 'input',
            initialValue: '',
            placeholder: '请输入账户',
        },
        {
            prop: 'nickname',
            type: 'input',
            initialValue: '',
            placeholder: '请输入昵称',
        },
        {
            prop: 'password',
            type: 'input',
            initialValue: '',
            placeholder: '请输入密码',
            isShow: true,
        },
        {
            prop: 'head',
            type: 'head',
            initialValue: '',
            requestInfo: {
                size: 4,
                url: '/uploads/head',
                name: 'head',
            },
        },
        {
            prop: 'school',
            type: 'select',
            initialValue: '',
            placeholder: '请选择学校',
            options: [],
        },
        {
            prop: 'power',
            type: 'select',
            initialValue: '',
            placeholder: '请选择类型',
            options: [],
        },
    ],
}

const mainStore = useMainStore()
mainStore.AllListAction()
const dialogConfigRef = computed(() => {
    const school = mainStore.schoolList.map((item: any) => {
        return { label: item.name, value: item.id }
    })
    const usertype = mainStore.usertypeList.map((item: any) => {
        return { label: item.name, value: item.id }
    })
    dialogConfig.formItems.forEach((item: any) => {
        if (item.prop === 'school') {
            item.options?.push(...school)
        } else if (item.prop === 'power') {
            item.options?.push(...usertype)
        }
    })

    return dialogConfig
})
export default dialogConfigRef
