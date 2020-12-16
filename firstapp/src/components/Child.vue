<template>
  <div>
    <h3>{{ messageToChild }}</h3>
    <input type="submit" value="submit" @click="callToParent" />
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["messageToChild"],
  data() {
    return {};
  },
  methods: {
    callToParent() {
      this.$emit("I am coming from child component to parent component");
    },
  },
};
</script>

<style></style>
