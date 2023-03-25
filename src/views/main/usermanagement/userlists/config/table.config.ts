const tableConfig = {
  propsList: [
    { prop: 'id', label: 'ID', fixed: 'left' },
    { prop: 'name', label: '账户' },
    { prop: 'nickname', label: '昵称' },
    { prop: 'head', label: '头像', slotName: 'head' },
    { label: '操作', slotName: 'handler', minWidth: '120', fixed: 'right' }
  ]
}

export default tableConfig
