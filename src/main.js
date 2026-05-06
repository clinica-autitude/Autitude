import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err, info)
}

window.addEventListener('error', (e) => {
  console.error('Global Error:', e.error)
})

app.use(router)
app.mount('#app')