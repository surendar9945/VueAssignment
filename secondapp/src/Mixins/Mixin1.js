export default {
  created: function() {
    this.fun();
  },
  methods: {
    fun: function() {
      console.log("Mixin1");
      alert("Click increment to increase the counter");
    }
  }
};
