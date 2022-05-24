<template>
  <div class="home">
    <h2>Cities</h2>
    <div class="container">
      <div class="row">
  
          <ul class="list-group">
            <li
              v-for="city in cities"
              :key="city.id"
            >
              {{ city.name }}
              <span class="badge badge-primary badge-pill">
                <router-link
                  :to="{ path: `/cities/${city.id}` }"
                  class="btn btn-primary ml-2"
                  >Edit</router-link
                >
                <Button @click="deleteCity(city.id)"
                  >Delete</Button>
              </span>
            </li>
          </ul>
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
    };
  },
  
     methods: {
    async fetchCities() {
      let citiesSnapShot = await getDocs(citiesColRef);
      let cities = [];
      citiesSnapShot.forEach((city) => {
        let cityData = city.data();
        cityData.name = city.name;
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
}
</script>

<style scoped>
.product{
 display: flex;
  justify-content: space-evenly;
}
</style>
