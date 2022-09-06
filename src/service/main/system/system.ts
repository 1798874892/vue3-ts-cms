import xyRequest from '../../index'

import { IDataType } from '../../types'

// 1.获取页面数据
export function getPageListData(url: string, queryInfo: any) {
  return xyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 2.删除某一个数据
// url: /users/id
export function deletePageData(url: string) {
  return xyRequest.delete<IDataType>({
    url: url
  })
}

// 3.创建新用户
export function createPageData(url: string, newData: any) {
  return xyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

// 4.编辑用户信息
export function editPageData(url: string, editData: any) {
  return xyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
