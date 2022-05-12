import { createStore } from 'vuex'
import { defineStore } from 'pinia'

export default createStore({
  state: {
    modalToggle: {
      setting: false, textPreference: false, qDetail: false
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

export const useAppStore = defineStore('Store', {
  state: () => {
    return {
      setting: false, textPreference: false, quoteDetail: false
    }
  },
  actions: {
    toggleSetting () {
      this.setting = !this.setting
    },
    toggleTextPreference () {
      this.textPreference = !this.textPreference
    },
    toggleQuoteDetail () {
      this.quoteDetail = !this.quoteDetail
    }
  },
  getters: {}

})
