<template>
  <div id="dynamic">
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <b-button variant="warning" v-on:click="toggle">Switch</b-button>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Dynamic1 from "./Dynamic1.vue";
import Dynamic2 from "./Dynamic2.vue";
export default {
  name: "dynamic",

  components: {
    Dynamic1,
    Dynamic2
  },
  data() {
    return {
      component: "Dynamic2"
    };
  },
  methods: {
    toggle() {
      if (this.component === Dynamic1) {
        this.component = Dynamic2;
      } else {
        this.component = Dynamic1;
      }
    }
  }
};
</script>

<style>
#dynamic {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
