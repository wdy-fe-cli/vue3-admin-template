import request from './axios'

let modulesApis = []
const files = import.meta.globEager('./modules/*.js')
for (const key in files) {
  if (Object.hasOwnProperty.call(files, key)) {
    if (files[key].default) {
      modulesApis.push(...files[key].default)
    }
  }
}

export const apiUrls = new Map([...modulesApis])

// 常规请求头
export function http(apiName, params) {
  const [url, method, obj] = apiUrls.get(apiName)
  return request[method](url, params, { ...obj })
}
