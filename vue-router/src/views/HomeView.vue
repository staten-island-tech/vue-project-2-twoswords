<template>
  <div class="home">
    <h2>Cities</h2>
    <div class="container">
          <Card
              v-for="city in cities"
              :key="city.id"
              :name="city.name"
              :country="city.country"
            >
              <span>
                <router-link 
                  :to="{path: '/cities/${cities.id}'}" class="link"
                  >Edit</router-link
                >
                <Button @click="deleteCity(city.id)"
                  >Delete</Button>
              </span>
              </Card>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import citiesColRef from "../firebase/config";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
import Card from '../components/Card.vue';
import Button from '../components/Button.vue'
export default {
  name: 'HomeView',
  components: {
    Card,
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
  justify-content: space-evenly;
}
</style>
