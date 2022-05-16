<template>
  <div class="smart-radio-container">
    <span> {{ title }} :</span>
    <div class="radios">
      <form

        v-for="(label) in radios"
        :key="label"
        class="radio"
        @change="$emit('checked', localSelection)"
      >
        <input
          :id="label"
          v-model="localSelection"
          type="radio"
          :name="label"
          :value="label"
        >
        <label :for="label"> {{ label }} </label>
      </form>
    </div>
  </div>
</template>

<script>
</script>

<script setup>

import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  radios: {
    type: Array,
    required: true
  },
  checkedRadio: {
    type: String,
    required: true
  }
})

const localSelection = ref(props.checkedRadio)

defineEmits(['checked'])

</script>

<style scoped lang="scss">
@use '~@/styles' as s;

.smart-radio-container {
  display: flex;
  align-items: center;
  gap: s.f-unit(2rem);

  margin: 2rem 0;

  .radios {
    display: flex;
    align-items: center;
    gap: s.f-unit(1rem);

    .radio {

      label {
        text-transform: capitalize;
      }
    }
  }
}

</style>
