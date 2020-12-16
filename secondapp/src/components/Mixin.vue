<template>
  <div id="mixins">
    <div class="p-3 mb-2 bg-info text-white">
      <h1>Mixins</h1>
    </div>
    <div>{{ counter }}</div>
    <div>
      <b-button variant="warning" @click.prevent="onIncrement(3)"
        >Increment</b-button
      >
    </div>
  </div>
</template>
<script>
import myMixin from "../Mixins/myMixin";
import myMixin2 from "../Mixins/myMixin2";
export default {
  name: "mixin",
  mixins: [myMixin, myMixin2],
  data() {
    return {
      counter: 5
    };
  },
  mounted() {
    console.log("mounted from component");
  }
};
</script>
<style>
#mixins {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
