<template>
  <div class="MainTable">
    <base-table v-bind="tableConfig" :tableData="tableData">
      <template #state="scope">
        <template v-if="scope.row.missionstate === 1"> <el-tag>待帮助</el-tag></template>
        <template v-else-if="scope.row.missionstate === 2">
          <el-tag type="warning">已帮助</el-tag>
        </template>
        <template v-else-if="scope.row.missionstate === 3">
          <el-tag type="danger">已完成</el-tag>
        </template>
      </template>
      <template #head="scope">
        <el-avatar alt="头像" :src="scope.row.head" />
      </template>
      <template #handler="scope">
        <el-button @click="onClickEdit(scope.row)" type="primary">
          <el-icon><EditPen /></el-icon>
        </el-button>
        <el-button @click="onClickDelete(scope.row)" type="danger">
          <el-icon><Delete /></el-icon>
        </el-button>
      </template>
    </base-table>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/base-ui/Base-Table/BaseTable.vue'
interface IProps {
  tableConfig: {
    propsList: any[]
  }
  tableData: any[]
}
defineProps<IProps>()
const emits = defineEmits(['onClickEdit', 'onClickDelete'])
//修改
const onClickEdit = (item: any) => {
  emits('onClickEdit', item)
}
//删除
const onClickDelete = (item: any) => {
  emits('onClickDelete', item)
}
</script>

<style lang="less" scoped></style>
