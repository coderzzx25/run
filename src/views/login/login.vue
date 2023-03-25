<template>
  <div class="login">
    <login-account />
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './cpn/LoginAccount.vue'
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
