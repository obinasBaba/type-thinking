<template>
  <div class="smart-checkbox-container">
    <input
      :id="text"
      type="checkbox"
      :name="text"
      :value="value"
      @change="$emit('checked')"
    >
    <label :for="text"> {{ text }} </label>
  </div>
</template>

<script>
export default {
  name: 'SmartCheckBox'
}
</script>

<script setup>

defineProps({
  text: {
    type: String,
    required: true
  },
  value: {
    type: Boolean,
    required: true
  }
})

defineEmits(['checked'])

</script>

<style scoped lang="scss">
@use '~@/styles' as s;

.smart-checkbox-container{
  display: flex;
  align-items: center;
  gap: s.f-unit(1rem);

}

</style>
