import { createApp } from 'vue'
import App from './App.vue'
import './assets/globals.css'
import { BootstrapVue, IconsPlugin, BootstrapVuePlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Vue.config.productionTip = false;
//
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

createApp(App)
.mount('#app');
