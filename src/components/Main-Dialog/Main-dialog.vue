<template>
  <div class="Main-dialog">
    <el-dialog
      :model-value="dialogVisible"
      :title="isNews ? '添加数据' : '修改数据'"
      center
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      align-center
      destroy-on-close
    >
      <base-form v-bind="dialogConfig" v-model="formValue" ref="baseFormRef"> </base-form>
      <template #footer>
        <el-button @click="onClickSure" type="primary">确定</el-button>
        <el-button @click="onClickCancel">取消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import BaseForm from '@/base-ui/BaseForm/BaseForm.vue'
import { reactive, ref } from 'vue'

interface IProps {
  dialogConfig: {
    formItems: any[]
  }
}
const props = defineProps<IProps>()
const emits = defineEmits(['onClickEditSure', 'onClickAddSure'])

// 定义form的数据
let initialForm: any = {}
for (const item of props.dialogConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? ''
}
let formValue = reactive(initialForm)
//模态框显示/隐藏
const dialogVisible = ref(false)
// 表单ref
const baseFormRef = ref<InstanceType<typeof BaseForm>>()

//判断是否为添加/修改
const isNews = ref(true)
const editValue = ref()

const setDialogVisible = (isNew: boolean = true, itemData?: any) => {
  dialogVisible.value = true
  isNews.value = isNew
  if (!isNew && itemData) {
    //修改
    for (const key in formValue) {
      if (key === 'password') {
        const passwordItem = props.dialogConfig.formItems.find((item) => item.prop === 'password')
        passwordItem.isShow = true
      }

      formValue[key] = itemData[key]
    }
    editValue.value = itemData
  } else {
    //添加
    for (const key in formValue) {
      if (key === 'password') {
        const passwordItem = props.dialogConfig.formItems.find((item) => item.prop === 'password')
        passwordItem.isShow = false
      }

      const item = props.dialogConfig.formItems.find((item) => item.prop === key)
      formValue[key] = item ? item.initialValue : '' || []
    }
    editValue.value = null
  }
}

//确定
const onClickSure = () => {
  if (!isNews.value && editValue.value) {
    //修改
    emits('onClickEditSure', { ...formValue, id: editValue.value.id })
    dialogVisible.value = false
  } else {
    //添加
    emits('onClickAddSure', formValue)
    dialogVisible.value = false
  }
}
//取消
const onClickCancel = () => {
  baseFormRef.value?.resetForm()
  dialogVisible.value = false
}

defineExpose({
  setDialogVisible
})
</script>

<style lang="less" scoped></style>
