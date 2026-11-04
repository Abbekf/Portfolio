import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import sv from './locales/sv.json'
import en from './locales/en.json'

const storageKey = 'portfolio-language'

function savedLanguage(): 'sv' | 'en' {
  try {
    return localStorage.getItem(storageKey) === 'sv' ? 'sv' : 'en'
  } catch {
    return 'en'
  }
}

function syncLanguage(language: string) {
  const lang = language === 'en' ? 'en' : 'sv'
  document.documentElement.lang = lang
  document.title = i18n.t('meta.title')
  for (const [selector, key] of [
    ['meta[name="description"]', 'meta.description'],
    ['meta[property="og:title"]', 'meta.title'],
    ['meta[property="og:description"]', 'meta.socialDescription'],
  ]) {
    document.querySelector(selector)?.setAttribute('content', i18n.t(key))
  }
  try {
    localStorage.setItem(storageKey, lang)
  } catch {
    // Switching still works when browser storage is unavailable.
  }
}

void i18n.use(initReactI18next).init({
  resources: { sv: { translation: sv }, en: { translation: en } },
  lng: savedLanguage(),
  fallbackLng: 'en',
  supportedLngs: ['sv', 'en'],
  initAsync: false,
  interpolation: { escapeValue: false },
})

syncLanguage(i18n.language)
i18n.on('languageChanged', syncLanguage)

export default i18n
