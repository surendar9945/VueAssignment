<template>
  <div>
    <div id="app">Welcome!</div>
    <hr />
    <stringbind />
    <Click />
    <Life />
    <Raw />
    <Computed />
    <Conditional />
    <Eventkey />
    <Parent />
    <Child />
  </div>
</template>

<script>
import Stringbind from "./components/Stringbind.vue";
import Click from "./components/Click.vue";
import Life from "./components/Life.vue";
import Raw from "./components/Raw.vue";
import Computed from "./components/Computed.vue";
import Conditional from "./components/Conditional.vue";
import Eventkey from "./components/Eventkey.vue";
import Parent from "./components/Parent.vue";
import Child from "./components/Child.vue";

export default {
  name: "App",
  components: {
    Stringbind,
    Click,
    Life,
    Raw,
    Computed,
    Conditional,
    Eventkey,
    Parent,
    Child,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-shadow: #1ce960;
  background-color: rgb(60, 58, 70);
  color: #ecf0f3;
}
</style>
