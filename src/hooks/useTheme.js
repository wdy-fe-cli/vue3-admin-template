import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import { DEFAULT_PRIMARY } from '@/config'
import { useGlobalStore } from '@/store/modules/global'
import { getLightColor, getDarkColor } from '@/utils/color'

/**
 * @description 全局主题 hooks
 * */
export const useTheme = () => {
  const globalStore = useGlobalStore()
  const { primary, isDark, isGrey, isWeak, asideInverted, layout } = storeToRefs(globalStore)

  // 切换暗黑模式 ==> 并带修改主题颜色、侧边栏颜色
  const switchDark = () => {
    const html = document.documentElement
    if (isDark.value) html.setAttribute('class', 'dark')
    else html.setAttribute('class', '')
    changePrimary(primary.value)
  }

  // 修改主题颜色
  const changePrimary = (val) => {
    if (!val) {
      val = DEFAULT_PRIMARY
      // ElMessage({
      //   type: "success",
      //   message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`,
      // });
    }
    // 计算主题颜色变化
    document.documentElement.style.setProperty('--el-color-primary', val)
    document.documentElement.style.setProperty(
      '--el-color-primary-dark-2',
      isDark.value ? `${getLightColor(val, 0.2)}` : `${getDarkColor(val, 0.3)}`
    )
    for (let i = 1; i <= 9; i += 1) {
      const primaryColor = isDark.value
        ? `${getDarkColor(val, i / 10)}`
        : `${getLightColor(val, i / 10)}`
      document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor)
    }
    globalStore.setGlobalState('primary', val)
  }

  // 灰色和弱色切换
  const changeGreyOrWeak = (type, value) => {
    if (!value) return document.body.removeAttribute('style')
    const styles = {
      grey: 'filter: grayscale(1)',
      weak: 'filter: invert(80%)',
    }
    document.body.setAttribute('style', styles[type])
    const propName = type === 'grey' ? 'isWeak' : 'isGrey'
    globalStore.setGlobalState(propName, false)
  }

  // init theme
  const initTheme = () => {
    switchDark()
    if (isGrey.value) changeGreyOrWeak('grey', true)
    if (isWeak.value) changeGreyOrWeak('weak', true)
  }

  return {
    initTheme,
    switchDark,
    changePrimary,
    changeGreyOrWeak,
  }
}
