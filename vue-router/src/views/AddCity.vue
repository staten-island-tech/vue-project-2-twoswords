<template>
  <div>
    <div class="container">
      <div class="addpost">
          <form @submit.prevent="createCity" class="addform">
            <div class="group">
              <label for="addtitle">Title</label>
              <input type="text" class="addinput" id="addtitle" placeholder="Think of a good one..." v-model="name" required/>
            </div>
             <div class="group">
              <label for="addimg">Image Address</label>
              <input type="text" class="addinput" id="addimg" placeholder="Kid friendly pls..." v-model="image" required/>
            </div>
            <div class="group">
              <label for="text">Content (Max Word Length = 1200)</label>
              <textarea type="text" maxlength="1200" class="addinput" id="text" placeholder="Type something here..." v-model="country" required></textarea>
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