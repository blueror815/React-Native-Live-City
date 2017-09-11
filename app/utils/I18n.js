import { AsyncStorage } from 'react-native';
import i18n from 'i18n-js';
import { en, es } from '../config/locales';

const I18n = i18n;

I18n.defaultLocale = 'es';
I18n.fallbacks = true;

init();

I18n.translations = {
  es: es,
  en: en
};

export async function changeLanguage(lang) {
  try {
    AsyncStorage.setItem('@livecities:locale', lang, () => {
      init(lang);
    });
  } catch (error) {}
}

function init(lang = null) {
  if (lang) {
    I18n.locale = lang;
  } else {
    AsyncStorage.getItem('@livecities:locale', (error, value) => {
      if (error === null && value !== null) {
        I18n.locale = value;
      } else {
        I18n.locale = 'es';
      }
    });
  }
}

export default I18n;
