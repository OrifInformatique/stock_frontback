import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(
    {
        debug: false,

        supportedLngs: ["fr"],
        fallbackLng: 'fr',

        backend:
        {
            loadPath: `${process.env.APP_ROOT !== "/" ? process.env.APP_ROOT : ""}/locales/{{lng}}/{{ns}}.json`
        },

        ns: ["filters", "item", "misc"],

        interpolation:
        {
            escapeValue: false
        },

        react:
        {
            useSuspense: true
        }
    });

export default i18n;