<template>
    <div class="card">
        <h2>{{name}}</h2>
        <img :src="image" alt="">
        <h2>{{description}}</h2>
        <span><slot></slot></span>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Card",
    props: {
        name: String,
        image: String,
        description: String,
    },
}
</script>

<style scoped>
.card{
    background-color: white ;
    margin-top: 2rem;
    width: 30rem;
    height: 30rem;
    border: 0.0625rem solid lightgray;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.555);
    transition-duration: all ease 2s;
}
img {
  width: 30%;
  height: 50%;
}
.card:hover {
  transform: scale(1.05);
}
</style>