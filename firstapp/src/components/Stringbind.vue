<template>
  <div>
    <h1>String Interpolation:</h1>
    <h3>{{ msg }}</h3>
    <a v-bind:href="title" target="_none">Click Me! </a>
    <div v-bind:title="firstName + ' ' + lastName">Hover to see the name</div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Stringbind",
  data() {
    return {
      msg: "Im coming by String Interpolation",
      title: "https://in.pinterest.com/",
      firstName: "Raven",
      lastName: "Rayes",
    };
  },
};
</script>

<style></style>
'
