import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from "axios";
import VueAxios from "vue-axios";
import router from './router';
import './global.scss';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');
