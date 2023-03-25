const useTable = (deleteAction: any) => {
  //删除
  const onClickDelete = (item: any) => {
    ElMessageBox.confirm('是否确定删除该数据?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        deleteAction(item.id)
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消'
        })
      })
  }
  return { onClickDelete }
}

export default useTable
