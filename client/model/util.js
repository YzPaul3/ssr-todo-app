import { Notification } from 'element-ui'
import bus from '../../util/bus'

export const createError = (code, msg) => {
  const err = new Error(msg)
  err.code = code
  return err
}

export const handleError = (err) => {
  if (err.code === 401) {
    Notification.warning({ message: '请先登录！' })
    bus.$emit('auth')
  }
}
