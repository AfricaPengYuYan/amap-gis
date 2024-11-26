import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import * as Cesium from 'cesium';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YjI3NjRmMy1jYjUwLTQ3ODQtOGFjZi01NDQzOWU3NjM4NDIiLCJpZCI6MjU3NDU2LCJpYXQiOjE3MzIzNjQ2MDB9.1fW-WfFZkxf8talOXbcuuYcWTh-ptjuwUyGrmE1t8e8';

const app = createApp(App);
app.use(router);
app.mount('#app');
