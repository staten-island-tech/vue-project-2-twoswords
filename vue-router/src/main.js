import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store/index'

//global styles
import './assets/style.css'

//import store

createApp(App).use(router).use(store).mount('#app')
