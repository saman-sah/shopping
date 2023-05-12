import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import customJS  from './assets/js/custom'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import 'jquery/dist/jquery.min.js';

const app=createApp(App).use(ToastPlugin).use(store).use(router)

app.config.globalProperties.$customJS = customJS;
app.mount('#app')




