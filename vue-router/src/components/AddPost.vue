<template>
    <div id="add-post">
        <h2>Create Post</h2>
        <form v-if="!submitted">
            <label>Post Title:</label>
            <input type="text" v-model.lazy="post.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="post.content"></textarea>
            <div id="checkboxes">
                <label>Food</label>
                <input type="checkbox" value="food" v-model="post.categories"/>
                <label>Travel</label>
                <input type="checkbox" value="food" v-model="post.categories"/>
                <label>Story</label>
                <input type="checkbox" value="food" v-model="post.categories"/>
                <label>Recommendation</label>
                <input type="checkbox" value="food" v-model="post.categories"/>
                <label>Food</label>
                <input type="checkbox" value="food" v-model="post.categories"/>
            </div>
            <label>Author:</label>
            <input type="text" v-model.lazy="post.author" required />
        </form>
        <div v-if="submitted">
            <h3>Muy Xapowo</h3>
        </div>
        <div id="preview">
            <h3>Preview Post</h3>
            <p>Post title: {{post.title}}</p>
            <p>Post content:</p>
            <p>{{post.content}}</p>
            <p>Post Categories:</p>
            <ul>
                <li v-for="category in post.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ post.author }}</p>
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
    methods: {
        post: function(){
            this.$http.post('https://vue-firebase-1bc25-default-rtdb.firebaseio.com/posts.json',{

            }

            )
        }
    }
}

</script>