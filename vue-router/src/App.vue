<template>
  <div class="container">
    <Navbar />
    <router-link to="/">VueFirebase</router-link>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/NavBar'
export default {
  components: {Navbar}
}
</script>

<style scoped>

</style>
