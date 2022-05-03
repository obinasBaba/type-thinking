<template>
  <nav>
    <h1>L</h1>
    <h1>S</h1>
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

  border: thin solid red;
}

</style>
