import { createI18n } from 'vue-i18n'

import zh from './modules/zh'
import en from './modules/en'
import id from './modules/id'

const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: 'en',
  globalInjection: true, // 全局注入
  messages: {
    en,
    zh,
    id,
  },
})

export default i18n
