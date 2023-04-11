import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import customJS  from './assets/js/custom'

import 'jquery/dist/jquery.min.js';

const app=createApp(App).use(store).use(router)

app.config.globalProperties.$customJS = customJS;
app.mount('#app')




