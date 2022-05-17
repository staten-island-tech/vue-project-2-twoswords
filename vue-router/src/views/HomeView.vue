<template>
  <div id="showposts">
    <h1>All Posts</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="post in filteredposts" class="singleblog">
      <router-link v-bind:to="'/post/' + post.id"><h2>{{post.title | to-uppercase}}</h2></router-link>
      <article>{{post.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  export default{
    data(){
      return{
        blog:[],
        search:''
      }
    }
  }
}
</script>
