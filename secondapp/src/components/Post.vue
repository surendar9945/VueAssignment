<template>
  <div>
    <div class="p-3 mb-2 bg-info text-white">
      <h1>API DATA</h1>
    </div>
    <table border="1px" id="post">
      <div class="p-3 mb-2 bg-light text-dark">
        <tr>
          <td><b>Id</b></td>
          <td><b>Title</b></td>
        </tr>

        <tr v-for="item in list" v-bind:key="item.id">
          <td>{{ item.userId }}</td>
          <td>{{ item.title }}</td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "api",
  data() {
    return { list: undefined };
  },
  mounted() {
    Vue.axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)

      .then(response => {
        this.list = response.data;
        console.warn(response.data);
      });
  }
};
</script>
