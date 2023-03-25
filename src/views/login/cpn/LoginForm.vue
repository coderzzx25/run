<template>
  <div class="LoginForm">
    <el-form :rules="rules" ref="loginFormRef" :model="formValue" label-position="top" size="large">
      <el-form-item label="账户" prop="name">
        <el-input v-model="formValue.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formValue.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import useLoginStore from '@/store/login/login'
//login pinia
const loginStore = useLoginStore()
// 表单ref
const loginFormRef = ref<FormInstance>()
//账户密码
const formValue = reactive({
  name: localCache.getCache('name') ?? '',
  password: ''
})
//登录事件
const loginAction = (isRedAccount: boolean) => {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      loginStore.userLoginAction(formValue).then(() => {
        ElMessage.success('登录成功')
      })
      //记住密码
      if (isRedAccount) {
        localCache.setCache('name', formValue.name)
      } else {
        localCache.deleteCache('name')
      }
    } else {
      ElMessage.error('请检查输入的账户密码')
    }
  })
}

//表单验证
const rules = ref({
  name: [
    { required: true, message: '请输入账户', trigger: 'blur' },
    { min: 5, max: 11, message: '长度为5-11', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, max: 11, message: '长度为5-11', trigger: 'blur' }
  ]
})

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
