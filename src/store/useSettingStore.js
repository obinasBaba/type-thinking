import { defineStore } from 'pinia'

const ShapeConstants = {
  BLOCK: 'block',
  BOX: 'box',
  LINE: 'line',
  TERMINAL: 'terminal'
}

const MovementConstants = {
  JUMPING: 'jumping',
  SMOOTH: 'smooth'
}

const TabsConstants = {
  TYPING: 'typing',
  ACCOUNT: 'account'
}

export default defineStore('setting-store', {
  state: () => {
    return {
      tabs: [{ label: TabsConstants.TYPING, isActive: true }, { label: TabsConstants.ACCOUNT, isActive: false }],
      capitalCharacter: false,
      stopOnError: true,
      cursor: {
        shape: ShapeConstants.BLOCK,
        movement: MovementConstants.JUMPING
      }
    }
  },
  actions: {
    toggleStopOnError () {
      this.stopOnError = !this.stopOnError
    },
    setCursorShape (value) {
      if (value in Object.values(ShapeConstants)) {
        this.cursor.shape = value
      }
    },
    setCursorMovement (value) {
      if (value in Object.values(MovementConstants)) {
        this.cursor.movement = value
      }
    },

    setActiveTab (idx) {
      this.tabs.find(({ isActive }) => isActive).isActive = false
      this.tabs[idx].isActive = true
    },

    resetTab () {
      this.setActiveTab(0)
    }
  },
  getters: {

    getActiveTab () {
      return this.tabs.find(({ isActive }) => isActive)
    },

    getTabLabels () {
      return this.tabs.map(({ label }) => label)
    },

    getShapeRadioLabels () {
      return Object.values(ShapeConstants)
    },

    getMovementLabels () {
      return Object.values(MovementConstants)
    },

    getCurrentShape () {
      return this.cursor.shape
    },

    getCurrentMovement () {
      return this.cursor.movement
    }
  }

})
