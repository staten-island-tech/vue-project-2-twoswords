<template>
    <div id="add-post">
        <h2>Create Post</h2>
        <form v-if="!submitted">
            <label>Post Title:</label>
            <input type="text" v-model.lazy="post.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <label>Author:</label>
            <input type="text" v-model.lazy="post.title" required />

            </div>

        </form>
      
    </div>
</template>

<script>

</script>