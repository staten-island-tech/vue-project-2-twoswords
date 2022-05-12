<template>
    <div id="add-post">
        <h2>Create Post</h2>
        <form v-if="!submitted">
            <label>Post Title:</label>
            <input type="text" v-model.lazy="post.title" required />
            <label>Post Content:</label>
            <textarea v-model.lazy="post.content"></textarea>
            <div id="checkboxes">
                <label>Food</label>
                <input type="checkbox" value="food" v-model="post.categories"/>
                <label>Travel</label>
                <input type="checkbox" value="travel" v-model="post.categories"/>
                <label>Story</label>
                <input type="checkbox" value="Story" v-model="post.categories"/>
                <label>Recommendation</label>
                <input type="checkbox" value="recommendation" v-model="post.categories"/>
                <label>important</label>
                <input type="checkbox" value="important" v-model="post.categories"/>
            </div>
            <label>Author:</label>
            <input type="text" v-model.lazy="post.author" required />
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>Muy Xapowo</h3>
        </div>
        <div id="preview">
            <h3>Preview Post</h3>
            <p id="p-title">Post title: {{post.title}}</p>
            <p id="p-title">Post content:</p>
            <p id="p-title">{{post.content}}</p>
            <p id="p-title">Post Categories:</p>
            <ul>
                <li>{{ category }}</li>
            </ul>
            <p id="p-title">Author: {{ post.author }}</p>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return{
            post:{
                title:"",
                content:"",
                categories:[],
                author:""
            },
            submitted: false
        }
    },
    methods:{
        cpost:function(){
            this.$http.post('https://vue-firebase-1bc25-default-rtdb.firebaseio.com/posts.json', this.post).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}

</script>