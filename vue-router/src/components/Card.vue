<template>
    <div class="card" id="show-modal" @click="showModal = true">
        <h2 class="cardname">{{name}}</h2>
        <img :src="image" alt="">
        <span><slot></slot></span>
        

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
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    background-color: white ;
    margin-top: 5rem;
    width: 40rem;
    height: 30rem;
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