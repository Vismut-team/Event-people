import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"

import App from './App.vue'
import VueClickAway from "vue3-click-away";
import router from './router'
import globalComponents from './components/global'

const app = createApp(App)

app.use(createPinia())
app.use(VueClickAway)
app.use(router)
app.use(globalComponents)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
