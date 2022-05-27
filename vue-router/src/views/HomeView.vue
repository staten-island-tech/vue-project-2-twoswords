<template>
  <div class="home">
    <h3 v-if="!user">*Certain Features Only Accessible for LoggedIn User*</h3>
    <div class="container">

          <Card v-for="city in cities" :key="city.id" :name="city.name" :image="city.image" :country="city.country">
            <span v-if="user">
              <router-link :to="{path: `/cities/${city.id}`}" class="editlink">Edit</router-link>
              <Button @click="deleteCity(city.id)">Delete</Button>
            </span>
                  
          </Card>   
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed } from "vue";
import { useStore } from "vuex";
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
  setup() {
    const store = useStore();
    return {
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
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
};
.heading{
display: flex;
align-items: center;
justify-content: center;
}


</style>
