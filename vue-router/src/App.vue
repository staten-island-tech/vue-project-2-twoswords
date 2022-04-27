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
  components: {Navbar},
    name: "App",
    data(){
      return {
        addpost: false
      }
    },
    watch: {
      "$route": {
        handler: function(to){
          if(to.path === "/addpost"){
           //console.log(to)
            this.addpost = true;
          }else{
            this.addpost = false;
          }
        },
       immediate: true
      }
    }
  }
</script>

<style scoped>

</style>
