import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import {createPinia} from "pinia";

const api = axios.create({
    baseURL: "http://rafaelcoldebella.com.br:91/api/",
});

export default api

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

