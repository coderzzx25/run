const tableConfig = {
  propsList: [
    { prop: 'id', label: 'ID', fixed: 'left' },
    { prop: 'name', label: '菜单名' },
    { prop: 'url', label: '路径' },
    { prop: 'icon', label: '图标' },
    { prop: 'type', label: '菜单层级' },
    { label: '操作', slotName: 'handler', minWidth: '120', fixed: 'right' }
  ]
}

export default tableConfig
