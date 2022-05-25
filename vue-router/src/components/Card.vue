<template>
    <div class="card">
        <h2 class="cardname">{{name}}</h2>
        <article class="cardcontent">{{country.substring(0,100)+".." }}</article>
        <span><slot></slot></span>
        <router-link :to="{path: '/cities/${city.id}'}" class="link">Edit</router-link>
        <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
    </div>
</template>

<script>
/* eslint-disable */
import Modal from './Modal-card.vue'
export default {
    name: "Card",
    props: {
        name: String,
        image: String,
        country: String,
    },
    components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
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
    width: 50rem;
    height: 20rem;
    margin-left: 10rem;
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