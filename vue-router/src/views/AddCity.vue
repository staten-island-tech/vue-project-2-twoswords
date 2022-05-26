<template>
  <div>
    <div class="container">
      <div class="add-post">
        <h2 class="headeradd">Add New Post</h2>
          <form @submit.prevent="createCity" class="addform">
            <div class="form-2group">
              <input type="text" class="form-control" placeholder="Title" v-model="name"/>
            </div>
             <div class="form-2group">
              <input type="text" class="form-control" placeholder="Image Address" v-model="image"/>
            </div>
            <div class="form-group">
              <textarea type="text" class="form-control" id="text" placeholder="Type something here..." v-model="country"></textarea>
            </div>
            <button class="addbtn">Create Post</button>
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
      image: null,
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