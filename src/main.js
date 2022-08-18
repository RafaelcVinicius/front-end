import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

const api = axios.create({
 baseURL: "http://rafaelcoldebella.com.br:91/api/",
});

export default api

createApp(App).use(router).mount('#app')

