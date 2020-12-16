<template>
  <div>
    <h2>Click Functions using Buttons:</h2>
    <button class="btn btn-dark" @click="welcome">Say Hi!</button><br /><br />
    <button class="btn btn-danger" @click="say('Danger Danger!')">Danger</button
    ><br /><br />
    <button class="btn btn-success" @click="say('I am Great!')">HRY</button><br /><br />
    <button class="btn btn-dark" @click="time">click me show Time and Date</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Click",
  data() {
    return {
      msg: "We welcome to our wonderful World!",
    };
  },
  methods: {
    welcome: function () {
      alert("Hello " + this.msg);
      //  if (event) {
      //  alert(event.target.tagname);
      //}
    },
    say: function (message) {
      alert(message);
      console.log(message);
    },
    time() {
      let s1 = Date();
      alert(s1);
    },
  },
};
</script>

<style></style>
