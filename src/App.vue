<template>
  <el-config-provider :locale="locale" :size="assemblySize" :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import { onMounted, reactive, computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useTheme } from '@/hooks/useTheme'
import { useI18n } from 'vue-i18n'
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import id from 'element-plus/es/locale/lang/id'
import { getBrowserLang } from '@/utils'
import { useGlobalStore } from '@/store/modules/global'
import update from '@/utils/update'

const globalStore = useGlobalStore()
// init language
const i18n = useI18n()
onMounted(() => {
  update.isNewVersion()
  const language = globalStore.language ?? getBrowserLang()
  i18n.locale.value = language
  globalStore.setGlobalState('language', language)
})

// init theme
const { initTheme } = useTheme()
initTheme()

// element language
const locale = computed(() => {
  if (globalStore.language === 'zh') return zhCn
  if (globalStore.language === 'en') return en
  if (globalStore.language === 'id') return id

  let tempLang = getBrowserLang()
  return tempLang === 'zh' ? zhCn : tempLang === 'en' ? en : id
})
// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize)

// element button config
const buttonConfig = reactive({ autoInsertSpace: false })
</script>
