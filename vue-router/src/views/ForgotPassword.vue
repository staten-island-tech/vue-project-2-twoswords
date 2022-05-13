<template>
   <form @submit.prevent="forgotPassword">
    <div class="center">
 <h2>Forgot Password</h2>
      
    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <Button @click="sendEmail">Reset Password</Button>
    <h3 v-if="error">{{error}}</h3>

    </div>
  </form>   
   
</template>

<script>
import Button from '../components/Button.vue'
export default {
  /*eslint-disable*/
  name: "ForgotPassword",
  components: {Button},
  data() {
  return {
    email: "",
    error: null,
    emailSending: false,
  };
},
  methods:{
      sendEmail() {
  if (!this.email) {
    this.error = "Please type in a valid email address.";
    return;
  }
  this.error = null;
  this.emailSending = true;
  firebase
    .auth()
    .sendPasswordResetEmail(this.email)
    .then(() => {
      this.emailSending = false;
    })
    .catch(error => {
      this.emailSending = false;
      this.error = error.message;
    });
}

  }
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: var(--h4);
}
input {
  width: 20rem;
  height: 3rem;
  font-size: var(--h4);
}
form button {
  background:#00dba4;
  display: block;
  margin-top: 20px;
  width: 20rem;
  height: 6rem;
}
form {
  display: flex;
  justify-content: center;
}

.center{
  display: flex;
  flex-direction: column;
}
</style>