import { createRouter, createWebHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import AddPost from "@/components/AddPost";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
