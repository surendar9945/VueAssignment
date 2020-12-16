/* eslint-disable vue/require-v-for-key */
<template>
  <div>
    <h2>COnditional Rendering:</h2>
    If-Else:
    <h3 v-if="amor">Accept the Fate</h3>
    <h3 v-else>Die</h3>
    If-else-if:
    <h3 v-if="type === 'dog'">Dog People</h3>
    <h3 v-else-if="type === 'cat'">Cat People</h3>
    <h3 v-else>Neither</h3>
    V-Show:
    <div v-show="show"><img :src="image1" alt="Polar Express" /></div>
    <hr />
    <div>
      <p><b>V-FOR:</b></p>
      <b-list-group>
        <b-list-group-item variant="dark" v-for="car in cars" :key="car.id"
          >{{ car.id }}{{ car }}</b-list-group-item
        >
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conditional",
  data() {
    return {
      image1: "https://www.cleanpng.com/png-merry-christmas-decor-design-png-6419896/",
      amor: true,
      show: true,
      type: "dog",
      cars: ["Lamborghini", "Ferrari", "Pagani", "Mclaren", "Dodge"],
    };
  },
};
</script>

<style></style>
