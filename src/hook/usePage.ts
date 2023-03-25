import { reactive } from 'vue'

const usePage = (request: any) => {
  //page hook
  //分页
  const pageValue = reactive({
    page: 1,
    size: 5
  })
  //数量
  const onChangeSize = (size: number) => {
    pageValue.size = size
    pageValue.page = 1
    request()
  }
  //页码
  const onChangeCurrent = (current: number) => {
    pageValue.page = current
    request()
  }
  return { pageValue, onChangeSize, onChangeCurrent }
}

export default usePage
