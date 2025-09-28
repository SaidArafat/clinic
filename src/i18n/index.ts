import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import arNavbar from '../../locales/ar/navbar.json'
import enNavbar from '../../locales/en/navbar.json'

import arLanding from '../../locales/ar/landing.json'
import enLanding from '../../locales/en/landing.json'

import arAbout from '../../locales/ar/about.json'
import enAbout from '../../locales/en/about.json'

import arFooter from '../../locales/ar/footer.json'
import enFooter from '../../locales/en/footer.json'

import arServices from '../../locales/ar/services.json'
import enServices from '../../locales/en/services.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enLanding,
          ...enNavbar,
          ...enAbout,
          ...enFooter,
          ...enServices
        }
      },
      ar: {
        translation: {
          ...arLanding,
          ...arNavbar,
          ...arAbout,
          ...arFooter,
          ...arServices
        }
      }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
