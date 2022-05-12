<template>
  <nav>
    <div class="logo">
      L
    </div>
    <div class="icons">
      <span class="theme" style="background-image: url('/icon-theme.svg') "/>
      <span class="fullscreen" style="background-image: url('/icon-fullscreen.svg') "/>
      <span class="text-pref" style="background-image: url('/icon-text.svg') "/>
      <span class="setting" style="background-image: url('/icon-setting.svg') "/>
      <button class="login">Login</button>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '~@/styles' as s ;

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: s.fluid-indent(.5rem) s.fluid-indent(2rem);
  cursor: pointer;

  border: thin solid red;

  .icons {
    display: flex;
    gap: 1rem;

    span {
      display: inline-block;
      width: 45px;
      height: 45px;

      background-position: center;
      background-repeat: no-repeat;
    }

  }
}

</style>
