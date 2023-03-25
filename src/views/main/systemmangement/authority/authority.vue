<template>
  <div class="authority">
    <main-head titleName="角色列表" btnName="添加角色" @onClickAdd="onClickAdd" />
    <div class="content">
      <main-search
        :formConfig="searchConfig"
        @onClickSearch="onClickSearch"
        @onClickRefresh="onClickRefresh"
      />
      <main-table
        :tableConfig="tableConfig"
        :tableData="list"
        @onClickEdit="onClickEdit"
        @onClickDelete="onClickDelete"
      />
      <main-page
        :total="count"
        v-model="pageValue"
        @onChangeSize="onChangeSize"
        @onChangeCurrent="onChangeCurrent"
      />
      <main-dialog
        :dialogConfig="dialogConfig"
        ref="mainDialogRef"
        @onClickEditSure="onClickEditSure"
        @onClickAddSure="onClickAddSure"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import MainHead from '@/components/Main-Head/MainHead.vue'
import MainSearch from '@/components/Main-Search/MainSearch.vue'
import MainTable from '@/components/Main-Table/MainTable.vue'
import MainPage from '@/components/Main-Page/MainPage.vue'
import MainDialog from '@/components/Main-Dialog/Main-dialog.vue'

import searchConfig from './config/search.config'
import tableConfig from './config/table.config'
import dialogConfig from './config/dialog.config'

import usePage from '@/hook/usePage'
import useSearch from '@/hook/useSearch'
import useDialog from '@/hook/useDialog'
import useTable from '@/hook/useTable'

import useUsertypeStore from '@/store/usertype/usertype'

const usertypeStore = useUsertypeStore()
//数据请求
const requestService = (searchValue?: any) => {
  usertypeStore.listAction({ ...pageValue, ...searchValue })
}
//数据删除
const deleteServie = (id: number) => {
  usertypeStore.deleteAction(id)
}
//数据添加
const increaseService = (data: any) => {
  usertypeStore.increaseAction(data)
}
//数据修改
const updataService = (data: any) => {
  usertypeStore.updataAction(data)
}

// page hook
const { pageValue, onChangeSize, onChangeCurrent } = usePage(requestService)

requestService()
const { list, count } = storeToRefs(usertypeStore)

//search hook
const { onClickSearch, onClickRefresh } = useSearch(requestService)

//table hook
const { onClickDelete } = useTable(deleteServie)

//dialog hook
const { mainDialogRef, onClickAdd, onClickEdit, onClickAddSure, onClickEditSure } = useDialog(
  increaseService,
  updataService
)
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px;
}
</style>
