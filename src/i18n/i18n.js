import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import or from "./or.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      or: { translation: or },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
