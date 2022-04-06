import { createRouter, createWebHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Main from "@/components/Main";
import AddPost from "@/components/AddPost";
import Post from "@/components/Post";

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
    name: "Main",
    component: Main,
  },
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
