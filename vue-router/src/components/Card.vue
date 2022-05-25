<template>
    <div class="card">
        <h2 class="cardname">{{name}}</h2>
        <h2 class="cardcontent">{{country}}</h2>
        <span><slot></slot></span>
        <router-link :to="'/cities/${city.id}'" class="link">Edit</router-link>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Card",
    props: {
        name: String,
        image: String,
        country: String,
    },

}
</script>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-color: white ;
    margin-top: 2rem;
    width: 150rem;
    height: 40rem;
    border: 0.0625rem solid lightgray;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.555);
    transition-duration: all ease 2s;
}
img {
  width: 50%;
  height: 70%;
}
.card:hover {
  transform: scale(1.05);
}
</style>