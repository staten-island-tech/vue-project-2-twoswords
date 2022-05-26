<template>
    <div class="container">
      <div class="cardlist">
        <h2 class="cardname">{{name}}</h2>
        <div class="cardinfo">
          <img class="cardimg" :src="image" alt=""> 
          <p class="cardcontent">{{country.substring(0,3000)}}</p>
        </div>
        <span><slot></slot></span>
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
.cardlist{
     display: flex;
   flex-direction: column;
    justify-content: center;
    border: 0.5rem solid;
    border-color: var(--primary);
    border-radius: 2rem;
    font-weight: bold;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgb(227, 243, 255) ;
    margin-top: 5rem;
    width: 100rem;
    height: 49rem;
    border: 0.0625rem solid lightgray;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.555);
    margin: 0.5rem auto;
    margin-top: 4rem;
    align-items: center;
    position: relative;
}
.container{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-evenly;
 
}

.container:hover{
transform: scale(1.02);
}

img {
  width: 20rem;
  border-radius: 1rem;
}
.cardinfo{
  display: flex;
 justify-content: center;
 margin-top: 1rem;
 margin-bottom: 1rem;
 width: 90rem;
 height: 35rem;
 padding: 2.5rem;
 border: 0.0625rem solid rgb(166, 166, 166);
 border-radius: 1rem;
 background-color: rgb(252, 228, 228);
}
.cardname{
   margin: 0;
  font-size: 2rem;
  justify-content: center;
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

.card:hover {
  transform:  rotateY(180deg);
  transition: all 3s ease;
}

.card:focus .back {
  transform: rotateY(180deg);
}

.cardcontent{
  font-size: 1.5rem;
  width: 70rem;
  margin-left: 5rem;
  border-radius: 1rem;
  background-color: rgb(227, 227, 227);
  padding: 1.5rem;
  box-shadow: .2rem .2rem .2rem rgba(0, 0, 0, 0.555);
}

</style>