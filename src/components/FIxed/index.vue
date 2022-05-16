<template>
  <div class="fixed-container">
    <SettingModal />
  </div>
</template>

<script>
import SettingModal from '@/components/SettingModal'
export default {
  name: 'FixedLayout',
  components: { SettingModal }
}
</script>

<style scoped lang="scss">

.fixed-container{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: grid;
  place-items: center;
  pointer-events: none;
  //backdrop-filter: blur(3px);

  border: thick solid red;

  & > * {
    pointer-events: initial;
  }
}

</style>
