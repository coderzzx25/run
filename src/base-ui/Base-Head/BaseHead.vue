<template>
  <div class="BaseHead">
    <el-upload
      action="#"
      :http-request="handleHttpUpload"
      :before-upload="handleBeforeUpload"
      class="avatar-uploader"
      :show-file-list="false"
    >
      <img v-if="modelValue" :src="modelValue" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import type { UploadRawFile, UploadRequestOptions } from 'element-plus'
import { uploadFile } from '@/service/modules/file'
interface IProps {
  modelValue: string
  requestInfo: {
    size: number
    url: string
    name: string
  }
}
const props = defineProps<IProps>()
const emits = defineEmits(['update:modelValue'])

const handleBeforeUpload = (file: UploadRawFile) => {
  const isFileType =
    file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif'
  const isFileSize = file.size / 1024 / 1024 < props.requestInfo.size
  if (!isFileType) {
    ElMessage.error('上传头像图片只能是 JPG/PNG/GIF 格式!')
  }
  if (!isFileSize) {
    ElMessage.error(`上传头像图片大小不能超过 ${props.requestInfo.size}MB!`)
  }
}

const handleHttpUpload = async (file: UploadRequestOptions) => {
  const formData = new FormData()
  formData.append(props.requestInfo.name, file.file)
  const res = await uploadFile({ url: props.requestInfo.url, data: formData })
  emits('update:modelValue', res.data)
}
</script>

<style lang="less" scoped>
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
