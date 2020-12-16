<template>
  <div v-bind:class="{ active: isActive }">
    <h2>Life Cycle Methods:</h2>
    <br />
    <br />
    <p>I'm text inside the component.</p>
    <p id="count">{{ counter }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Life",
  data() {
    return {
      isActive: true,
      x: 10,
      counter: 0,
    };
  },
  beforeCreate: function () {
    alert(this.x);
    console.log("X is:" + this.x);
  },
  created() {
    alert(this.x);
    console.log("X after created is:" + this.x);
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  beforeMount: function () {
    console.log(`this is yet to be created`);
  },
  mounted: function () {
    alert("Now Mounted has happend");
    console.log(this.$el.textContent);
  },
  beforeUpdate() {
    // console.log(this.counter);
  },
  updated() {
    console.log(this.counter);
  },
  /* beforeDestroy() {
    alert("In a few i am going to be destroyed");
    console.log("before destroy");
  },
  destroyed() {
    alert("I am gone!");
  },
  */
};
</script>

<style>
.active {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: italic;
  font-size: 30px;
  background-color: rgb(153, 189, 189);
}
#count {
  color: rgb(7, 27, 19);
  font-family: "Courier New", Courier, monospace;
  font-size: 75px;
  margin: 50px 50px;
  text-align: center;
}
</style>
