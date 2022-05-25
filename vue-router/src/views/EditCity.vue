<template>
  <div>
    <div class="container">
      <div class="row">
        <div>
          <h2>Edit City</h2>
          <form @submit.prevent="updateCity">
            <div class="form-group">
              <input
                type="text"
                placeholder="Title"
                v-model="cityInfo.name"
              />
            </div>
         <div class="form-group">
              <textarea
              type="text"
                class="form-control"
                id="text"
                placeholder="Type something here..."
                v-model="cityInfo.country"
              ></textarea>
            </div>
            <button>Update City</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase/config";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
    name: "EditCity",
  data() {
    return {
      selectedCity: {},
      cityId: null,
      docRef: null,
      cityInfo: {
        name: null,
        country: null,
      },
    };
  },
  methods: {
    async getCity() {
      let cityRef = doc(citiesColRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.country = cityData.country;
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(
        `The city with ID of ${this.cityId} has been updated successfully!`
      );
      this.$router.push("/");
    },
  },
  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>
