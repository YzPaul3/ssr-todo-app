import notify from '../components/notification/function'
import bus from '../../util/bus'

export const createError = (code, msg) => {
  const err = new Error(msg)
  err.code = code
  return err
}

export const handleError = (err) => {
  if (err.code === 401) {
    notify({
      content: '请先登录！'
    })
    bus.$emit('auth')
  }
}
