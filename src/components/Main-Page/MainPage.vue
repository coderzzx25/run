<template>
  <div class="MainPage">
    <el-pagination
      v-model:current-page="modelValue.page"
      v-model:page-size="modelValue.size"
      :page-sizes="[5, 10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next"
      :total="total"
      @size-change="onChangeSize"
      @current-change="onChangeCurrent"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
interface IProps {
  total: number
  modelValue: {
    page: number
    size: number
  }
}
defineProps<IProps>()
const emits = defineEmits(['onChangeSize', 'onChangeCurrent'])

const pageValue = reactive({
  currentPage: 1,
  pageSize: 5
})
const onChangeSize = (value: number) => {
  // pageValue.pageSize = value
  // pageValue.currentPage = value
  emits('onChangeSize', value)
}
const onChangeCurrent = (value: number) => {
  // pageValue.currentPage = value
  emits('onChangeCurrent', value)
}
defineExpose({
  pageValue
})
</script>

<style lang="less" scoped>
.MainPage {
  margin-top: 20px;
}
</style>
