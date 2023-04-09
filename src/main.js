import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'jquery/dist/jquery.min.js';

createApp(App)
.use(store)
.use(router)
.mount('#app')




