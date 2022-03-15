import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import TRANSLATIONS_EN from 'translations/english'
import TRANSLATIONS_FR from 'translations/french'

i18n.use(initReactI18next).init({
  fallbackLng: 'en-US',
  debug: process.env.NODE_ENV === 'development',
  resources: {
    'en-US': {
      translation: TRANSLATIONS_EN,
    },
    fr: {
      translation: TRANSLATIONS_FR,
    },
  },
})

export default i18n
