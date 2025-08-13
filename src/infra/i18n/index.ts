import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// import en from "../../locales/en.json";
// import ptBr from "../../locales/pt-BR.json";
// import es from "../../locales/es.json";

const hostI18n = i18n.createInstance();

hostI18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      // en: { translation: en },
      // "pt-BR": { translation: ptBr },
      // es: { translation: es }
    },
    fallbackLng: "pt-BR",
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false
    }
  });

export default hostI18n;
