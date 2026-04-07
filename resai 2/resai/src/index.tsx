import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container!);


import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import CustomLanguageDetector from "./utilities/CustomLanguageDetector";


//English
import enAuth from "./locales/en/auth.json";
import enCommon from "./locales/en/common.json";
//Hindi
import hiAuth from "./locales/hi/auth.json";
import hiCommon from "./locales/hi/common.json";

//Espanis
import esAuth from "./locales/es/auth.json";
import esCommon from "./locales/es/common.json";

i18n.use(CustomLanguageDetector).init({
  resources: {
    en: {
      translation: { ...enAuth, ...enCommon },
    },
    hi: {
      translation: { ...hiAuth, ...hiCommon },
    },
    es: {
      translation: { ...esAuth, ...esCommon },
    },
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});



root.render(
  <BrowserRouter>
     <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
