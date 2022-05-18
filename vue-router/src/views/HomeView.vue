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
    data(){
      return{
        blog:[],
        search:''
      }
    },
    methods:{

    },
    created(){
      this.$http.get('https://vue-firebase-1bc25-default-rtdb.firebaseio.com/posts.json').then(function(data){
        return data.json();
      }).then(function(data){
        var postsArray = [];
        for (let key in data){
          data[key].id = key
          blogsArray.push(data[key]);
        }
        this.posts = postsArray
      })
    },
    computed:{

    },
    filters:{
      toUppercase(value){
        return value.toUpperCase();
      }
    }
  }
</script>
