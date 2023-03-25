<template>
  <div class="BaseForm">
    <el-form :model="modelValue" ref="formRef" size="large">
      <el-row :gutter="10">
        <template v-for="item in formItems" :key="item.prop">
          <el-col v-bind="colSpan">
            <el-form-item v-if="!item.isShow" :prop="item.prop">
              <template v-if="item.type === 'input' && 'password'">
                <el-input
                  v-model="modelValue[item.prop]"
                  :placeholder="item.placeholder"
                  :show-password="item.prop === 'password'"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="modelValue[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'custom'">
                <base-tree v-model="modelValue[item.prop]" :data="item.menulist" />
              </template>
              <template v-if="item.type === 'head'">
                <base-head v-model="modelValue[item.prop]" :requestInfo="item.requestInfo" />
              </template>
            </el-form-item>
          </el-col>
          <el-col v-bind="colBtn">
            <slot name="btns"></slot>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import BaseTree from '../Base-Tree/BaseTree.vue'
import BaseHead from '../Base-Head/BaseHead.vue'
import type { ElForm } from 'element-plus'
import { ref } from 'vue'

interface IProps {
  colSpan?: object
  colBtn?: object
  formItems: any[]
  modelValue: any
}
withDefaults(defineProps<IProps>(), {
  colSpan: () => ({
    xl: 6, // >=1920px
    lg: 8, // >=1200px
    md: 12, // >=992px
    sm: 24, // >=768px
    xs: 24 // <768px
  })
})
// 表单重置方法
const formRef = ref<InstanceType<typeof ElForm>>()
const resetForm = () => {
  formRef.value?.resetFields()
}
defineExpose({
  resetForm
})
</script>

<style lang="less" scoped></style>
