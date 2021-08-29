import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import PrimeVue from 'primevue/config'
import Rating from 'primevue/rating';
const app = createApp(App);
app.use(router).use(store).use(PrimeVue)
app.component('Rating', Rating)
app.mount('#app')
