const tableConfig = {
  propsList: [
    { prop: 'id', label: 'ID', fixed: 'left' },
    { prop: 'name', label: '类型名' },
    { prop: 'icon', label: '图标' },
    { prop: 'url', label: '路径' },
    { label: '操作', slotName: 'handler', minWidth: '120', fixed: 'right' }
  ]
}

export default tableConfig
