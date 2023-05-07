import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import axios from "axios";

import './assets/style.css'

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.baseFrontURL = "http://localhost:5173";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
