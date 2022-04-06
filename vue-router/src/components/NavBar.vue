<template>
  <nav class="navbar">
    <h1>FireBase Blogs</h1>

  
    <div class="home-btn">
      <router-link to="/" class="link">Main</router-link>
    </div>

    <div>
      <router-link to="/addpost" class="link">Add Post</router-link>
    </div>
    
    <div v-if="user">
      <h3>Logged in as {{user.email}}</h3>
      <button @click="handleClick">Logout</button>
    </div>
   
    <div v-if="!user" class="account">
  
      <router-link to="/login" class="link">Login</router-link>  

      <router-link to="/signup" class="link">Signup</router-link>

    </div>

  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore} from 'vuex'
 /*eslint-disable*/
export default {
  name: "Navbar",
  setup(){
    const store = useStore()
    const handleClick = () => {
      store.dispatch('logout')
    }
    return {
    handleClick, 
    user: computed(() => store.state.user), 
    authIsReady: computed(() => store.state.authIsReady)
    }
  }
}

</script>

<style scoped>


</style>