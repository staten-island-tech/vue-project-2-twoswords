<template>
  <nav class="navbar">
    <h1>FireBase Blogs</h1>
    <!-- for all users -->
    <div>
      <router-link to="/" class="link">Home</router-link>
    </div>
    <!-- for logged in users -->
    <div>
      <h3>Logged in as...</h3>
      <button>Logout</button>
    </div>
    <!-- for logged out users -->

    
    <div class="router">
      
      <router-link to="/login" class="link" @click="toggleModal" type="button">Login</router-link>

      <router-link to="/signup" class="link">Signup</router-link>

    </div>
    
  </nav>
</template>

<script>
 /*eslint-disable*/
 import { ref } from "vue";
export default {
  name: "Navbar",
  components: {
  },
    setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
}

</script>

<style scoped>

</style>