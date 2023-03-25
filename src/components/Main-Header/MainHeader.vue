<template>
  <div class="MainHeader">
    <div class="left">
      <div class="logo">
        <el-image :src="logo"></el-image>
      </div>
      <div class="title">CMS系统</div>
    </div>
    <div class="right">
      <el-dropdown>
        <div class="info">
          <div class="head">
            <el-avatar :src="userInfo.head"></el-avatar>
          </div>
          <div class="name">{{ userInfo.nickname }}</div>
          <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="onClickOutLogin">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/image/logo.png'
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const loginStore = useLoginStore()
const { userInfo } = storeToRefs(loginStore)
const router = useRouter()
const onClickOutLogin = () => {
  localCache.deleteCache('token')
  localCache.deleteCache('userInfo')
  localCache.deleteCache('userMenu')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.MainHeader {
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 50px;
}
.title {
  font-weight: 500;
  font-size: 19px;
  margin-left: 10px;
}
.el-image {
  width: 100%;
  height: 100%;
}
.info {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.head,
.name {
  margin-right: 5px;
}
</style>
