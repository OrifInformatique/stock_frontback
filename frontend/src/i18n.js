import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["fr"],
    fallbackLng: "fr",
    debug: false,
    backend: {
      loadPath: `${process.env.APP_ROOT !== "/" ? process.env.APP_ROOT : ""}
        /locales/{{lng}}/{{ns}}.json`,
    },
    ns: ["translation", "itemInformation", "itemHistory"],
    defaultNB: "translation",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
