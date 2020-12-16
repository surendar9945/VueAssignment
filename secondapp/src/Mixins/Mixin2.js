export default {
  data() {
    return {
      counter: 0
    };
  },
  mounted() {
    console.log("I am mounted from mixin");
  },
  methods: {
    onIncrement(count) {
      this.counter += count;
    }
  }
};
