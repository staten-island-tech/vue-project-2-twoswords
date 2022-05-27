<template>
    <div class="container">
      <div class="cardlist">
        <h2 class="cardname">{{name}}</h2>
        <div class="cardinfo">
          <div class="imgandlink">
              <img class="cardimg" :src="image" alt=""> 
               <span><slot></slot></span>
          </div>
          <p class="cardcontent">{{country.substring(0,3000)}}</p>
        </div>
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
  data() {
    return {
    }
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
    background-color: rgb(238, 102, 98) ;
    margin-top: 5rem;
    width: 60rem;
    height: 80rem;
    border: 0.0625rem transparent;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.555);
    margin: 0.5rem auto;
    margin-top: 4rem;
    align-items: center;
    position: relative;
    animation: RedcolorRotate 6s linear 0s infinite;
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
  height: 30rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
}
.cardinfo{
  display: flex;
 justify-content: center;
 margin-top: 1rem;
 margin-bottom: 1rem;
 width: 56rem;
 height: 63rem;
 padding: 2.5rem;
 border: 0.0625rem solid rgb(166, 166, 166);
 border-radius: 1rem;
 background-color: rgb(232, 246, 255);
 animation: BluecolorRotate 6s linear 0s infinite;
}
.cardname{
  margin: 0;
  font-size: 4rem;
  justify-content: center;
}

.cardcontent{
  font-size: 1.5rem;
  width: 70rem;
  margin-left: 2rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
  padding: 1.5rem;
  box-shadow: .2rem .2rem .2rem rgba(0, 0, 0, 0.555);
}

.imgandlink{
    display: flex;
    flex-direction: column;
}

</style>