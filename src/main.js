import './assets/main.css'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router/index.js'
import fr from './locales/fr.json'
import en from './locales/en.json'

const savedLocale = localStorage.getItem('locale') || 'fr'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'fr',
  messages: { fr, en },
})

createApp(App).use(router).use(i18n).mount('#app')
