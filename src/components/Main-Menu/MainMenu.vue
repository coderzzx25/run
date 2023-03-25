<template>
  <div class="MainMenu">
    <el-menu
      :default-active="defaultActive"
      unique-opened
      background-color="#f5f5f9"
      text-color="#5a607f"
    >
      <template v-for="item in userMenu" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="children in item.children" :key="children.id">
            <el-menu-item :index="children.id + ''" @click="onClickItem(children)">
              <el-icon>
                <component :is="children.icon"></component>
              </el-icon>
              <span>{{ children.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { mapPathToMenu } from '@/utils/map-route'
import { ref } from 'vue'
const loginStore = useLoginStore()
const { userMenu } = storeToRefs(loginStore)

const route = useRoute()
const router = useRouter()
// 第一个菜单对象
const firstMenu = mapPathToMenu(route.path, userMenu.value)
//默认路径
const defaultActive = ref(firstMenu.id + '')
// 菜单切换事件
const onClickItem = (children: any) => {
  router.push(children.url)
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 0;
  background-color: #f5f6fa;
}
.is-active {
  background-color: #5a607f;
  color: #fff !important;
}
.el-menu-item {
  padding-left: 20px !important;
}
</style>
