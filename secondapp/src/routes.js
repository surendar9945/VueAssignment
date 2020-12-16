import Slots from "./components/Slots.vue";
import Mixin from "./components/Mixin.vue";
import Post from "./components/Post.vue";
const Dynamic = () => import("./components/Dynamic.vue");
export default [
  {
    name: "slots",
    path: "/",
    component: Slots
  },
  {
    name: "mixin",
    path: "/mixin",
    component: Mixin
  },
  { path: "/dynamic", name: "dynamic", component: Dynamic },
  { path: "/api", name: "api", component: Post }
];
