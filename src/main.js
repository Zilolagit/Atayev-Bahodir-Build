import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'

import uz from "@/locales/uz.json"
import en from "@/locales/en.json"
import ru from "@/locales/ru.json"

import AOS from 'aos'
import 'aos/dist/aos.css'



const i18n = createI18n({
    locale: localStorage.getItem("lang") || 'uz',
    fallbackLocale: 'en',
    messages: {
      en: en,
      uz: uz,
      ru: ru
    }
  })

  

createApp(App).use(i18n).mount('#app')