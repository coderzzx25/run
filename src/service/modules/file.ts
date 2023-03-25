import zxRequest from '..'

interface IUploadFile {
    url: string
    data: any
}

export function uploadFile(datas: IUploadFile) {
    return zxRequest.post({
        url: datas.url,
        data: datas.data,
    })
}
