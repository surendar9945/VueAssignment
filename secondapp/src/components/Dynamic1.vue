<template>
  <div id="dynamic1">
    <div class="p-2 mb-5 bg-info text-black">
      <h1>Fill the details</h1>
    </div>
    <form>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" /><br /><br />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" /><br /><br />
    </form>
  </div>
</template>
<script>
export default {
  name: "DynamicComponent1",
  props: {
    msg: String
  }
};
</script>
<style scoped></style>
