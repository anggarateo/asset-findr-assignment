import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
const pinia = createPinia()

app.use(ToastService)
app.use(PrimeVue)
app.use(pinia)
app.use(router)
app.mount('#app')
