<template>
  <div class="LoginAccount">
    <div class="name">登录</div>
    <login-form ref="fromCpnRef" />
    <div class="pwd">
      <el-checkbox v-model="isRedAccount" label="记住账户" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button @click="onClickLoginBtn" type="primary" size="large">登 录</el-button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ref, watch } from 'vue'
import LoginForm from './LoginForm.vue'
// form组件ref
const fromCpnRef = ref<InstanceType<typeof LoginForm>>()
//记住账户
const isRedAccount = ref(localCache.getCache('isRedAccount'))
//监听是否记住密码
watch(isRedAccount, (newValue) => {
  localCache.setCache('isRedAccount', newValue)
})
//登录按钮
const onClickLoginBtn = () => {
  fromCpnRef.value?.loginAction(isRedAccount.value)
}
</script>

<style lang="less" scoped>
.LoginAccount {
  width: 440px;
  height: 625px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(21, 34, 50, 0.08);
  padding: 40px;
}
.name {
  font-size: 32px;
  color: #131523;
  text-align: center;
}
.el-button {
  width: 100%;
  margin-top: 15px;
}
.pwd {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
