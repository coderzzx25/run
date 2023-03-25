<template>
  <div class="BaseTree">
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-checked-keys="modelValue"
      :props="{ children: 'children', label: 'name' }"
      @check="handleCheck"
    />
  </div>
</template>

<script setup lang="ts">
//
interface IProps {
  modelValue: any
  data: any[]
}
defineProps<IProps>()

const emits = defineEmits(['update:modelValue'])
const handleCheck = (data: any, checked: any) => {
  const menuList = [...checked.checkedKeys]
  emits('update:modelValue', menuList)
}
</script>

<style lang="less" scoped></style>
