<template>
  <div class="BaseTable">
    <el-table :data="tableData">
      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  propsList: any[]
  tableData: any[]
}
defineProps<IProps>()
</script>

<style lang="less" scoped></style>
