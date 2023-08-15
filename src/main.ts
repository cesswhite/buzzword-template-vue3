import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto' //@ ts ignore
//Pinia
import { createPinia } from "pinia";
import App from './App.vue'
import './assets/main.css'

const router = createRouter({
    history: createWebHistory(),
})
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
