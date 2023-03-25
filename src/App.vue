<template>
  <div class="App">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue'
const locale = ref(zhCn)
</script>

<style lang="less" scoped>
.App {
  width: 100vw;
  height: 100vh;
}
</style>
