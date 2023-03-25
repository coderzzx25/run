export interface ITaskList {
  page: number
  size: number
  searchValue?: string
}
export interface ITaskIncrease {
  outset: string
  end: string
  content: string
  remark: string | null
  school: number
  creator: number
  receiver: number | null
  type: number
  sum: string
}
export interface ITasktypeIncrease {
  name: string
  icon: string
  url: string
}
