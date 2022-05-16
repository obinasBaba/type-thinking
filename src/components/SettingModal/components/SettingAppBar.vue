<template>
  <div class="setting-appbar">
    <div
      v-for="(tab, idx) in settingStore.tabs"
      :key="tab.txt"
      class="tab"
      @click="onTabClick(idx)"
    >
      <span class="txt">
        {{ tab.label }}
      </span>

      <span
        v-show="tab.isActive"
        class="active-line"
      />
    </div>
  </div>
</template>

<script setup>

import useSettingStore from '@/store/useSettingStore'
import { onUnmounted } from 'vue'

const settingStore = useSettingStore()

const onTabClick = idx => {
  settingStore.setActiveTab(idx)
}

onUnmounted(() => {
  settingStore.resetTab()
})

</script>

<style scoped lang="scss">
@use '~@/styles' as s;

.setting-appbar {
  display: flex;
  gap: s.f-unit(1rem);
  padding: s.f-unit(.1rem) s.f-unit(.8rem);
  border-bottom: 1px solid lighten(#000000, 85);

  .tab {
    position: relative;
    padding: s.f-unit(.8rem) s.f-unit(1.2rem);
    display: grid;
    place-items: center;
    cursor: pointer;

    .active-line {
      position: absolute;
      bottom: -4px;
      height: 4px;
      width: 100%;
      border-radius: 14px;
      background-color: black;
    }
  }
}

</style>
