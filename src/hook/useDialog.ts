import type MainDialog from '@/components/Main-Dialog/Main-dialog.vue'
import { ref } from 'vue'

const useDialog = (increaseService: any, updataService: any) => {
  //dialog hook
  //dialogRef
  const mainDialogRef = ref<InstanceType<typeof MainDialog>>()
  //添加
  const onClickAdd = () => {
    mainDialogRef.value?.setDialogVisible(true)
  }
  //修改
  const onClickEdit = (item: any) => {
    mainDialogRef.value?.setDialogVisible(false, item)
  }
  //修改确认
  const onClickEditSure = (formValue: any) => {
    updataService(formValue)
  }
  //添加确认
  const onClickAddSure = (formValue: any) => {
    increaseService(formValue)
  }
  return { mainDialogRef, onClickAdd, onClickEdit, onClickEditSure, onClickAddSure }
}

export default useDialog
