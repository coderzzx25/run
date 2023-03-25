const dialogConfig = {
  colSpan: { span: 24 },
  formItems: [
    {
      prop: 'name',
      type: 'input',
      initialValue: '',
      placeholder: '请输入类型名'
    },
    {
      prop: 'icon',
      type: 'input',
      initialValue: '',
      placeholder: '请输入图标'
    },
    {
      prop: 'url',
      type: 'input',
      initialValue: '',
      placeholder: '请输入路径'
    }
  ]
}
export default dialogConfig
