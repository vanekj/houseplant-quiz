import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Load routes definition
import routes from './routes'

// Load default layout component
import DefaultLayout from './layouts/Default.vue'

// Import global styles
import './assets/styles/index.css'

// Create Vue router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create Vue application
const app = createApp(DefaultLayout)

// Use VueRouter plugin
app.use(router)

// Mount app to the page
app.mount('#app')
