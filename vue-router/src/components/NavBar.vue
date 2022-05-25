<template>
  <nav class="navbar">
    <h1>FireBase</h1>

    <div class="home-btn">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/add-city" class="link">Add</router-link>
    </div>

    <div v-if="user" class="logged">
      <h3 class="logas">{{ user.email.split('@') [0] }}</h3>
      <Button @click="handleClick">Logout</Button>
    </div>

    <div v-if="!user" class="account">
      <router-link to="/login" class="link">Login</router-link>

      <router-link to="/signup" class="link">Signup</router-link>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
/*eslint-disable*/
import Button from '../components/Button.vue'
export default {
  name: "Navbar",
  components: {Button},
  setup() {
    const store = useStore();
    const handleClick = () => {
      store.dispatch("logout");
    };
    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
};
</script>

<style scoped>
</style>
