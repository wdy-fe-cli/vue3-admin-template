import { defineStore } from 'pinia'
import router from '@/router'
import piniaPersistConfig from '@/config/piniaPersist'

const storeId = `${import.meta.env.VITE_ABBREVIATION}-store-tabs`
export const useTabsStore = defineStore({
  id: storeId,
  state: () => ({
    tabsMenuList: []
  }),
  actions: {
    // Add Tabs
    async addTabs(tabItem) {
      if (this.tabsMenuList.every((item) => item.path !== tabItem.path)) {
        this.tabsMenuList.push(tabItem)
      }
    },
    // Remove Tabs
    async removeTabs(tabPath, isCurrent) {
      const temTabsMenuList = this.tabsMenuList
      if (isCurrent) {
        temTabsMenuList.forEach((item, index) => {
          if (item.path !== tabPath) return
          const nextTab = temTabsMenuList[index + 1] || temTabsMenuList[index - 1]
          if (!nextTab) return
          router.push(nextTab.path)
        })
      }
      this.tabsMenuList = temTabsMenuList.filter((item) => item.path !== tabPath)
    },
    // Close MultipleTab
    async closeMultipleTab(tabsMenuValue) {
      this.tabsMenuList = this.tabsMenuList.filter((item) => item.path === tabsMenuValue || !item.close)
    },
    // Set Tabs
    async setTabs(tabsMenuList) {
      this.tabsMenuList = tabsMenuList
    },
    // Set Tabs Title
    async setTabsTitle(title) {
      // eslint-disable-next-line no-restricted-globals
      const nowFullPath = location.hash.substring(1)
      this.tabsMenuList.forEach((item) => {
        if (item.path === nowFullPath) item.title = title
      })
    }
  },
  persist: piniaPersistConfig(storeId)
})
