<template>
  <div class="main">
    <el-container>
      <el-header><main-header /></el-header>
      <el-container>
        <el-aside><main-menu /></el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/Main-Header/MainHeader.vue'
import MainMenu from '@/components/Main-Menu/MainMenu.vue'
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.el-header {
  padding: 0;
  height: 68px;
}
.el-container {
  height: 100%;
}
.el-aside,
.el-main {
  background-color: #f5f6fa;
  padding: 0;
}
.el-aside {
  border-right: 1px solid #d9e1ec;
  width: 220px;
}
.el-main {
  padding: 20px;
}
</style>
