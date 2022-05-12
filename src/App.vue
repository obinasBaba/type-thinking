<template>
  <div class="app" id="app">
    <NavBar/>
    <TextArea/>
    <SettingModal/>
  </div>
</template>

<script>
import TextArea from './components/TextArea.vue'
import NavBar from '@/components/navBar/NavBar'
import SettingModal from '@/components/SettingModal'

export default {
  name: 'App',
  components: {
    NavBar,
    TextArea,
    SettingModal
  }
}
</script>

<style  lang="scss">
@use "styles/global-style";
@use '~@/styles' as s;

#app {
  font-family: s.$fonts-auger;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
