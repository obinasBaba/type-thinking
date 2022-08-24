import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTextSettingStore = defineStore('text-setting-store', () => {
  const state = reactive({
    colors: ['#60B1CB', '#D27E4F', '#FCE7EE', '#6571DE'],
    selectedColor: '',
    alignment: 'left',
    size: 1
  })

  state.selectedColor = state.colors[0]

  function getColors () {
    return state.colors
  }

  function getAlignment () {
    return state.alignment
  }

  function isActive (direction) {
    if (direction === state.alignment) { return 'black' } else return '#949494'
  }

  return {
    state, getColors, getAlignment, isActive
  }
})
