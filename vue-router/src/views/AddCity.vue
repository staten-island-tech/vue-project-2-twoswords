<template>
  <div>
    <div class="container">
      <div class="add-post">
          <form @submit.prevent="createCity" class="addform">
            <div class="form-2group">
              <label for="addtitle">Title</label>
              <input type="text" class="form-control" id="addtitle" placeholder="Think of a good one..." v-model="name"/>
            </div>
             <div class="form-2group">
              <label for="addimg">Image Address</label>
              <input type="text" class="form-control" id="addimg" placeholder="Kid friendly pls..." v-model="image"/>
            </div>
            <div class="form-group">
              <label for="text">Content (Max Word Length = 1200)</label>
              <textarea type="text" maxlength="1200" class="form-control" id="text" placeholder="Type something here..." v-model="country"></textarea>
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