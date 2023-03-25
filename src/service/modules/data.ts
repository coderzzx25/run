import zxRequest from '..'

export function tasktypeData() {
  return zxRequest.get({
    url: '/data/tasktypedata'
  })
}
