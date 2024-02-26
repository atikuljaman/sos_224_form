import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import App from "./App.jsx";
import translationsEN from "./locales/en.json";
import translationsFR from "./locales/fr.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      translation: translationsEN,
    },
    fr: {
      translation: translationsFR,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
