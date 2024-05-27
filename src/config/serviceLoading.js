import { ElLoading } from 'element-plus'

/* 全局请求 loading */
let loadingInstance

/**
 * @description 开启 Loading
 * */
const startLoading = () => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: 'Loading',
    background: 'rgba(230, 230,230, 0.7)'
  })
}

/**
 * @description 结束 Loading
 * */
const endLoading = () => {
  loadingInstance.close()
}

/**
 * @description 显示全屏加载
 * */
let needLoadingRequestCount = 0
export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount += 1
}

/**
 * @description 隐藏全屏加载
 * */
export const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount -= 1
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
