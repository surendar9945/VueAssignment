<template>
  <div>
    <h2>Event and Key modifiers:</h2>
    <br />
    <button class="btn btn-success" @click="count++">Add 1</button>
    <p>You clicked the above counter {{ count }} times</p>
    <input type="”text”" v-on:keyup.enter="pressedEnter" /><br /><br />
    <input type="”text”" v-on:keyup.space="pressedSpace" />
    <hr />
  </div>
</template>

<script>
export default {
  name: "Eventkey",
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    pressedEnter: function () {
      alert("You pressed the Enter key!");
    },
    pressedSpace: function () {
      alert("You have pressed the space key!");
    },
  },
};
</script>

<style></style>
