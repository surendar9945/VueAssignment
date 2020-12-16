<template>
  <div>
    <h2>Computed and Watch:</h2>
    <p>Showing message: {{ message }}</p>
    <h3>Showing computed Message: {{ computedMethod }}</h3>
    Kilometers : <input type="text" v-model="kilometers" /> Meters :<input
      type="text"
      v-model="meters"
    />
    <hr />
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      message: "Happy Christmas🎄",
      kilometers: 0,
      meters: 0,
    };
  },
  methods: {},
  computed: {
    computedMethod: function () {
      return this.message.toUpperCase();
    },
  },
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    },
  },
};
</script>

<style></style>
