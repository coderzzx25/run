const tableConfig = {
  propsList: [
    { prop: 'id', label: 'ID', fixed: 'left' },
    { prop: 'outset', label: '起点' },
    { prop: 'end', label: '终点' },
    { prop: 'content', label: '内容' },
    { prop: 'remark', label: '备注' },
    // { prop: 'school', label: '学校', slotName: 'school', minWidth: '100' },
    // { prop: 'creator', label: '创建者', slotName: 'creator' },
    // { prop: 'receiver', label: '接收者', slotName: 'receiver' },
    // { prop: 'type', label: '类型', slotName: 'type' },
    // { prop: 'sum', label: '赏金' },
    { prop: 'missionstate', label: '状态', slotName: 'state' },
    { label: '操作', slotName: 'handler', minWidth: '120', fixed: 'right' }
  ]
}

export default tableConfig
