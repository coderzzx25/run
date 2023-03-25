<template>
  <div class="MainSearch">
    <base-form v-bind="formConfig" v-model="formValue" ref="baseFormRef">
      <template #btns>
        <el-button @click="onClickSearch" type="primary">
          <el-icon><Search /></el-icon>
        </el-button>
        <el-button @click="onClickRefresh">
          <el-icon><RefreshLeft /></el-icon>
        </el-button>
      </template>
    </base-form>
  </div>
</template>

<script setup lang="ts">
import BaseForm from '@/base-ui/BaseForm/BaseForm.vue'
import { reactive, ref } from 'vue'

interface IProps {
  formConfig: {
    formItems: any[]
    colSpan?: object
    colBtn?: object
  }
}
const props = defineProps<IProps>()
const emits = defineEmits(['onClickSearch', 'onClickRefresh'])

// 定义form的数据
const initialForm: any = {}
for (const item of props.formConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const formValue = reactive(initialForm)

const baseFormRef = ref<InstanceType<typeof BaseForm>>()
//查询
const onClickSearch = () => {
  emits('onClickSearch', formValue)
}
//重置
const onClickRefresh = () => {
  baseFormRef.value?.resetForm()
  emits('onClickRefresh')
}
</script>

<style lang="less" scoped></style>
