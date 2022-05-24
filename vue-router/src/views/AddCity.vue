<template>
  <div>
    <div class="container">
      <div class="row">

          <h2>Add City</h2>
          <form @submit.prevent="createCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Title"
                v-model="name"
              />
            </div>
            
            <div class="form-group">
              <textarea
              type="text"
                class="form-control"
                id="text"
                placeholder="Type something here..."
                v-model="country"
              ></textarea>
            </div>
            <button>Create City</button>
          </form>
        </div>

    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase/config";
import { addDoc } from "firebase/firestore";
export default {
    name: "AddCity",
  data() {
    return {
      name: null,
      country: null,
    };
  },
  methods: {
    async createCity() {
      console.log("Creating Document");
      const addedDoc = await addDoc(citiesColRef, this.$data);
      alert("Document created successfully!");
      console.log(addedDoc);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>