<template>
  <div class="home">
    <h2>Cities</h2>
    <div class="container">
          <div class="cardlist" v-for="city in cities" :key="city.id" :image="city.image">
             <h3 class="cardtitle">{{ city.name }}</h3> 
             <div class="cardinfo"> 
               <img class="cardimage" src="https://cdn.novelupdates.com/images/2017/07/thestrongestsystem.jpg" alt="">
               <p class="cardcontent">{{city.country.substring(0,100)+".."}}</p>
            </div>
              <span class="badge badge-primary badge-pill">
                <router-link :to="{ path: `/cities/${city.id}` }" class="btn btn-primary ml-2">Edit</router-link>
                <Button @click="deleteCity(city.id)"
                  >Delete</Button>
              </span>
          </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import citiesColRef from "../firebase/config";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
import Button from '../components/Button.vue'
export default {
  name: 'HomeView',
  components: {
    Button
  },
  data: () => {
    return {
   cities: [],
      selectedDoc: null,
    }
  },
  mounted(){this.fetchCities()},
     methods: {
    async fetchCities() {
      let citiesSnapShot = await getDocs(citiesColRef);
      let cities = [];
      citiesSnapShot.forEach((city) => {
        let cityData = city.data();
        //Object.keys(city)
        console.log(city.data())
        cityData.id = city.id;
        cities.push(cityData);
      });
     // console.log(cities);
      this.cities = cities;
    },
    async deleteCity(cityId) {
      let cityRef = doc(citiesColRef, cityId);
      await deleteDoc(cityRef);
      alert("City deleted successully!");
      this.$router.go();
    },
},
}
</script>

<style scoped>
.product{
 display: flex;
  justify-content: space-evenly;
}

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
    background-color: white ;
    margin-top: 5rem;
    width: 100rem;
    height: 40rem;
    border: 0.0625rem solid lightgray;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.555);
    margin: 0.5rem auto;
    align-items: center;
    position: relative;
}

.container{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-evenly;
};

.cardtitle{
  margin: 0;
  font-size: 2rem;
  justify-content: center;
}

.cardcontent{
  font-size: 1rem;
}

img {
  width: 20rem;
  height: 20rem;
}

.carddata{
  display: flex;
  flex-direction: column;
}

.cardinfo{
 display: flex;
 justify-content: center;
 margin-top: 1rem;
 margin-bottom: 1rem;
 height: 30rem;
 border: 0.0625rem solid rgb(143, 109, 109);
}
</style>
