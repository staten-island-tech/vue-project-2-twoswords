<template>      
   <form @submit.prevent="forgotPassword">
    <div class="center">
 <h2>Forgot Password</h2>
      
    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>


    <Button>Reset Password</Button>
    <h3 v-if="error">{{error}}</h3>

    </div>
  </form>

   
   
</template>

<script>
import firebase from 'firebase/app'
import Button from '../components/Button.vue'
import { ref } from 'vue'
import {useStore} from 'vuex'
import{useRouter} from 'vue-router'
export default {
  /*eslint-disable*/
  name: "ForgotPassword",
  components: {Button},
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
    try {
     await store.dispatch('login', {
       email: email.value,
       password: password.value
     })
     router.push('/')
   } catch(err){
     error.value = err.message
   }
    }
    return { handleSubmit, email, password, error }
  },
  methods:{
      forgotPassword(){
          firebase.auth().sendPasswordResetEmail(this.user.email, this.user.password).then(()=>{
              alert('Check Your Email')
            this.user={
                email:''
            }
          }).catch((error)=>{
              alert(error.message)
          })
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