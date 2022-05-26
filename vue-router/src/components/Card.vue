<template>
    <div class="card">
        <h2 class="cardname">{{name}}</h2>
        <img class="cardimg" :src="image" alt="">
        <span><slot></slot></span>
        <div class="back">
          <h2 class="cardcontent">{{country}}</h2>
          </div>
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
    components: {
  },
}
</script>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 0.5rem solid;
  border-color: var(--primary);
  border-radius: 2rem;
  font-weight: bold;
    flex-wrap: wrap;
    align-items: center;
    background-color: white ;
    margin-top: 5rem;
    width: 40rem;
    height: 40rem;
    border: 0.0625rem solid lightgray;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.555);
    transition-duration: all ease 2s;
    margin: 0.5rem auto;
  align-items: center;
  position: relative;
  perspective: 62.5rem;
  transform-style: preserve-3d;
  transform: all 3s ease;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
img {
  width: 50%;
  height: 70%;
  object-fit: cover;
}
.back {
  padding: 1rem;
  width: 40rem;
  height: 40rem;
  position: absolute;
  border: 0.5rem solid;
  background-color: white;
  border-radius: 1rem;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: all 3s ease;
}

.back {
  transform: rotateY(180deg);
}

.card:focus {
  transform:  rotateY(180deg);
  transition: all 3s ease;
}

.card:focus .back {
  transform: rotateY(180deg);
}

</style>