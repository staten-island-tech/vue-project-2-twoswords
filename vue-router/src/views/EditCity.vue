<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="editpost">
          <form @submit.prevent="updateCity" class="addform">
            <div class="group">
              <label for="updatetitle">New Title</label>
              <input id="updatetitle" type="text" placeholder="Title" v-model="cityInfo.name" required/>
            </div>
            <div class="group">
              <label for="updateimg">New Image</label>
              <input id="updateimg" type="text" class="control" placeholder="Image Address" v-model="cityInfo.image" required/>
            </div>
            <div class="group">
              <label for="text">New Content (Max Word Length = 1200)</label>
              <textarea type="text" maxlength="1200" class="control" id="text" placeholder="Type something here..." v-model="cityInfo.country" required></textarea>
            </div>
            <button class="addbtn">Update Post</button>
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
        image: null,
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
      this.cityInfo.image = cityData.image;
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(
        `The post with ID of ${this.cityId} has been updated successfully!`
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
