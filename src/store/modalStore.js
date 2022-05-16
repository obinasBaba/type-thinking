import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal-display-state', {
  state: () => {
    return {
      displaySetting: true,
      displayTextPreference: false,
      displayQuoteDetail: false
    }
  },
  actions: {
    toggleSetting () {
      this.displaySetting = !this.displaySetting
    },
    toggleTextPreference () {
      this.displayTextPreference = !this.displayTextPreference
    },
    toggleQuoteDetail () {
      this.displayQuoteDetail = !this.displayQuoteDetail
    }
  },
  getters: {}

})
