import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import axios from 'axios'
import { setStorage, clearStorage } from '@/utils/storage.js'
import piniaPersistConfig from '@/config/piniaPersist'
import { http } from '@/api'

const storeId = `${import.meta.env.VITE_ABBREVIATION}-store-user`
export const useUserStore = defineStore({
  id: storeId,
  state: () => ({
    userInfo: {},
  }),
  getters: {},
  actions: {
    // Get AuthButtonList
    async login(loginForm, abbreviation) {},

    // Set setUserInfo
    async getUserInfo() {
      let res = await http('apiUserInfo')
      this.userInfo = res.data
    },
  },
  persist: piniaPersistConfig(storeId),
})
