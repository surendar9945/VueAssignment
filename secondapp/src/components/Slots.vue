<template>
  <div>
    <div class="p-4 mb-5 bg-info text-black">
      <h1>Slots</h1>
    </div>
    <child-component>
      <template v-slot:image>
        <b-img
          center
          src="https%3A%2F%2Fwww.androidauthority.com%2Foneplus-8-pro-ultra-wide-1104601%2F&tbnid=o2qJfdj9Rne1nM&vet=12ahUKEwiUi-DhltDtAhWEGHIKHb1vBt0QMygKegUIARDOAQ..i&docid=x7oY6ksO2RFMTM&w=1920&h=1080&q=sample%20images&ved=2ahUKEwiUi-DhltDtAhWEGHIKHb1vBt0QMygKegUIARDOAQ"
          alt="Center image"
        ></b-img>
      </template>
    </child-component>
    <child-component></child-component>
  </div>
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "slots",
  // eslint-disable-next-line vue/no-unused-components
  components: { ChildComponent }
};
</script>
<style scoped></style>
