<template>
  <div class="home">


 <h2 class="heading">Book Gallery</h2>
    <div class="container">
 
          <Card v-for="city in cities" :key="city.id" :name="city.name" :image="city.image" :country="city.country">
          <Modal v-for="city in cities" :key="city.id" :country="city.country"></Modal>
            <span>
                  <router-link :to="{path: '/cities/${city.id}'}" class="link">Edit</router-link>
              <Button @click="deleteCity(city.id)">Delete</Button>
            </span>
          </Card>

    </div>




  </div>
</template>

<script>
// @ is an alias to /src
import citiesColRef from "../firebase/config";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
import Modal from '../components/Modal-card.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue'
export default {
  name: 'HomeView',
  components: {
    Card,
    Modal,
    Button
  },
  data: () => {
    return {
   cities: [],
      selectedDoc: null,
    }
  },
     methods: {
    async fetchCities() {
      let citiesSnapShot = await getDocs(citiesColRef);
      let cities = [];
      citiesSnapShot.forEach((city) => {
        let cityData = city.data();
        console.log(cityData)
        cityData.id = city.id;
        cities.push(cityData);
      });
     console.log(cities);
     this.cities = cities;
    },
    async deleteCity(cityId) {
      let cityRef = doc(citiesColRef, cityId);
      await deleteDoc(cityRef);
      alert("City deleted successully!");
      this.$router.go();
    },
},
created(){
  this.fetchCities();
}
}
</script>

<style scoped>
.container{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-evenly;
},
.heading{
display: flex;
justify-content: center;
}


</style>
