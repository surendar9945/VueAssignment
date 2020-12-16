<template>
  <div>
    <div class="p-3 mb-2 bg-info text-black">
      <h1>Fill the details</h1>
    </div>
    <form>
      <label for="uname">Uname:</label>
      <input type="uname" id="uname" name="uname" /><br /><br />
      <label for="age">Gender:</label>
      <select name="gender">
        <option>MALE</option>
        <option>FEMALE</option>
        <option>OTHERS</option>
      </select>
    </form>
  </div>
</template>
<script>
export default {
  name: "DynamicComponent2",
  props: {
    msg: String
  }
};
</script>
<style scoped></style>
