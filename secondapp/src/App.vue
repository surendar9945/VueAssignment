/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <p class="py-3 text-center">
      <router-link :to="{ name: 'slots' }">Slots |</router-link>

      <router-link :to="{ name: 'mixin' }"> Mixins |</router-link>

      <router-link :to="{ name: 'dynamic' }"> Dynamic Component |</router-link>

      <router-link :to="{ name: 'api' }"> API Data Fetch |</router-link>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
