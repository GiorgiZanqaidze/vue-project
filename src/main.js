import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import routes from "./router";
const app = createApp(App);

app.use(routes);
app.use(createPinia()); // Optionally, if you're using Pinia

app.mount('#app');
