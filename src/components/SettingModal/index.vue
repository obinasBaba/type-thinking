<template>
  <div
    v-if="store.displaySetting"
    class="setting-container"
  >
    <SettingAppBar />

    <div class="content">
      <SettingTyping v-if="activeTab.label === 'typing' && activeTab.isActive" />

      <div
        v-else-if="activeTab.label === 'account' && activeTab.isActive"
        class="account-settings"
      >
        <h1>account settings</h1>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useModalStore } from '@/store/modalStore'
import SettingTyping from '@/components/SettingModal/components/SettingTyping'
import SettingAppBar from '@/components/SettingModal/components/SettingAppBar'
import useSettingStore from '@/store/useSettingStore'

const store = useModalStore()
const settingStore = useSettingStore()
const activeTab = settingStore.getActiveTab

</script>

<style scoped lang="scss">
@use '~@/styles' as s;

.setting-container {
  position: absolute;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.26);
  width: 50vmax;
  height: 70%;
  margin-left: auto;
  border-radius: 11px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(3px);

  padding: s.f-unit(2rem);

  border: thin solid blue;

}

</style>
