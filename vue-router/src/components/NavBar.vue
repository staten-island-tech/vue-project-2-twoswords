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
      <router-link to="/login" class="link">Login</router-link>

      <router-link to="/signup" class="link">Signup</router-link>
    </div>
  </nav>
</template>

<script>
 /*eslint-disable*/
export default {
  name: "Navbar",
}
</script>

<style scoped>

</style>