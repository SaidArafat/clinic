import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enNavbar from '../../locales/en/navbar.json'
import arNavbar from '../../locales/ar/navbar.json'

import enLanding from '../../locales/en/landing.json'
import arLanding from '../../locales/ar/landing.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { ...enLanding, ...enNavbar } },
      ar: { translation: { ...arLanding, ...arNavbar } }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
