<template>
  <div id="child">
    <slot name="image">
      <div class="p-3 mb-2 bg-warning text-dark">
        <h1>Hello</h1>
      </div>
    </slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#child {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
