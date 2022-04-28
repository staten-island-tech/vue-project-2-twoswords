<template>
    <div id="add-post">
        <h2>Create Post</h2>
        <form v-if="!submitted">
            <label>Post Title:</label>
            <input type="text" v-model.lazy="post.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Food</label>
                <input type="checkbox" value="food" v-model="post.categries"/>
                <label>Travel</label>
                <input type="checkbox" value="food" v-model="post.categries"/>
                <label>Story</label>
                <input type="checkbox" value="food" v-model="post.categries"/>
                <label>Recommendation</label>
                <input type="checkbox" value="food" v-model="post.categries"/>
                <label>Food</label>
                <input type="checkbox" value="food" v-model="post.categries"/>
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
        </div>
      
    </div>
</template>

<script>

</script>