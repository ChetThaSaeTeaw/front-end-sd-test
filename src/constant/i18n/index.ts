import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getTranslation } from './langauge';

export const getLanguage = () => {
    return localStorage.getItem('LANGUAGE') || 'th';
};

export const setLanguage = (lang : string) => {
    localStorage.setItem('LANGUAGE', lang);
};


const resources = { ...getTranslation('th'), ...getTranslation('en')};
const lang = getLanguage();

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
});

export default i18n;