<template>
  <nav class="navbar">
    <h1>FireBase Blogs</h1>
    <!-- for all users -->
    <div>
      <router-link to="/" class="link">Home</router-link>
    </div>
    <!-- for logged in users -->
    <div v-if="user">
      <h3>Logged in as {{user.email}}</h3>
      <button @click="handleClick">Logout</button>
    </div>
    <!-- for logged out users -->

    
    <div v-if="!user">
  
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
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav h1 {
  margin-right: auto;
}
nav a, nav button, nav span {
  margin-left: 20px;
}
nav a {
  color: #444;
  text-decoration: none;
  font-weight: bold;
}
nav span {
  color: #777;
}
button {
  background:#00dba4;
  border: 0;
  padding: 6px 10px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
}
</style>