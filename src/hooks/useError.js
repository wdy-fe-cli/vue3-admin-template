import { ElMessage } from 'element-plus'
import { CPMErrorMap } from '@/hooks/useEnum'
import i18n from '@/languages'

export const showReqError = (res, key) => {
  if (key) {
    let language = i18n.global.locale.value
    console.log(language)
    let message = CPMErrorMap.get(key).get(language)
    if (message) {
      ElMessage.error(message)
      return
    }
  }
  ElMessage.error(res.message)
}
