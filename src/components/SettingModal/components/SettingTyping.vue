<template>
  <div

    class="typing-settings"
  >
    <div class="setting-general">
      <SmartCheckBox
        text="Enable Capital Character"
        :value="store.capitalCharacter"
      />
      <SmartCheckBox
        text="Stop On Error"
        :value="store.stopOnError"
        @checked="store.toggleStopOnError()"
      />
    </div>

    <div class="setting-cursor">
      <h3 class="setting-cursor-title">
        Cursor " {{ store.getCurrentShape }} "
      </h3>

      {{ store.getCurrentMovement }}
      {{ store.getCurrentShape }}

      <SmartRadioButton
        title="Shape"
        :radios="shapeLabel"
        :checked-radio="currentShape"
        @checked=" checkedValue => { store.cursor.shape=checkedValue; }"
      />

      <SmartRadioButton
        title="Movement"
        :radios="movementLabel"
        :checked-radio="currentMovement"
        @checked=" checkedValue => { store.cursor.movement=checkedValue; }"
      />
    </div>
  </div>
</template>

<script setup>
import SmartCheckBox from '@/components/SettingModal/components/SmartCheckBox'
import SmartRadioButton from '@/components/SettingModal/components/SmartRadioButton'
import useSettingStore from '@/store/useSettingStore'

const store = useSettingStore()

store.$subscribe(() => {
  console.log('store changed --')
})

const shapeLabel = store.getShapeRadioLabels
const movementLabel = store.getMovementLabels
const currentMovement = store.getCurrentMovement
const currentShape = store.getCurrentShape

</script>

<style scoped lang="scss">
@use '~@/styles' as s;

.typing-settings {
  margin-top: s.f-unit(2rem);

  border: thin solid red;

  .setting-general {

  }

  .setting-cursor {
    text-align: start;
    margin-top: 2rem;
  }
}

</style>
