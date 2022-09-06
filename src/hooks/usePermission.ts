import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  // !! -> 一个！表示对其取反 俩！！感叹号表示转化成boolean类型
  // let name = "abc"
  // !name = false
  // !!name = true
  return !!permissions.find((item) => item === verifyPermission)
  // return Boolean(permissions.find((item) => item === verifyPermission))
}
