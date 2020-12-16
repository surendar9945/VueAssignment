<template>
  <div v-bind:class="{ act: iActive }">
    <h2>Raw HTML and JavaScript Expressions:</h2>
    <p>Using v-html directive:<span v-html="rawHtml"></span></p>
    <p>Length of message is: {{ message.length }}</p>
    <p>Value of PI is: {{ Math.PI }}</p>
    <p>TOday's Date is: {{ new Date() }}</p>
    <p>{{ count == "5" ? "You are Good!" : "Bad" }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Raw",
  data() {
    return {
      iActive: true,
      count: 5,
      message: "Namaste",
      rawHtml: '<p style="color:red">Im from RawHtml</p>',
    };
  },
};
</script>

<style>
.act {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-shadow: 32vmax;
  text-decoration-color: black;
  background-color: rgb(52, 233, 233);
}
</style>
