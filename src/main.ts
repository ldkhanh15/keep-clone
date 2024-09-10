import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router'
import Antd from 'ant-design-vue';

import { createRouter, createWebHistory } from 'vue-router';
import FontAwesomeIcon from './plugins/font-awesome';
const router = createRouter({
    history: createWebHistory(),
    routes, 
  });
const app=createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(Antd)
app.mount('#app')
