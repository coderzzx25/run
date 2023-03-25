const useSearch = (request: any) => {
  //search hook
  //查询
  const onClickSearch = (searchValue: any) => {
    request(searchValue)
  }
  //重置
  const onClickRefresh = () => {
    request()
  }
  return { onClickSearch, onClickRefresh }
}

export default useSearch
