<template>
  <div>
    <h2>Parent Child Communication:</h2>
    <h5>Parent to child:</h5>
    <child messageToChild="Calling from parent. Iam now in child."></child>
    <child fromChild="callToParent"></child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  components: { Child },
  name: "Parent",
  // eslint-disable-next-line no-dupe-keys
  components: {
    Child,
  },
  data() {
    return {};
  },
  methods: {
    callToParent() {
      alert("Message recevied from child");
    },
  },
};
</script>

<style></style>
