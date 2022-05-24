<template>
  <div id="showposts">
    <h1>List Post Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="post in posts" :key="post.id" class="singleblog">
      <router-link v-bind:to="'/post/' + post.id"><h2>{{post.title | to-uppercase}}</h2></router-link>

    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {
  name: 'HomeView',
    data(){
      return{
        posts:[],
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
          postsArray.push(data[key]);
        }
        this.posts = postsArray
      })
    },
    computed:{

    },
    mixins:[searchMixin]
  }
</script>
