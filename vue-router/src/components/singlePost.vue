<template>
    <div id="singlepost">
        <h1>{{post.title}}</h1>
        <article>{{post.body}}</article>
    </div>
</template>

<script>
export default{
    data(){
        return {
            id: this.$route.params.id,
            post:{}
        }
    },
    created(){
        this.$http.get('https://vue-firebase-1bc25-default-rtdb.firebaseio.com/posts.json' + this.id).then(function(data){
            console.log(data)
            this.post = data.body;
        });
    }
}
</script>
