<template>
    <div class="card">
        <h2>{{name}}</h2>
        <img :src="image" alt="">
        <h2>{{country}}</h2>
        <span class="badge badge-primary badge-pill">
                <router-link :to="{ path: `/cities/${city.id}` }" class="btn btn-primary ml-2">Edit</router-link>
                <Button @click="deleteCity(city.id)"
                  >Delete</Button>
              </span>
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
    justify-content: center;
    align-items: center;
    background-color: white ;
    margin-top: 2rem;
    width: 40rem;
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