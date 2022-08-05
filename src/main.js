import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

const api = axios.create({
 baseURL: "http://127.0.0.1:91/api/",
});

export default api

createApp(App).mount('#app')


