<template>
  <div class="MainHead">
    <div class="title">{{ titleName }}</div>
    <el-button @click="onClickAdd" size="large" type="primary">{{ btnName }}</el-button>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  titleName: string
  btnName: string
}
defineProps<IProps>()
const emits = defineEmits(['onClickAdd'])

const onClickAdd = () => {
  emits('onClickAdd')
}
</script>

<style lang="less" scoped>
.MainHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.title {
  font-size: 20px;
}
</style>
