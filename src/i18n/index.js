import i18n from "i18next";


import { initReactI18next } from "react-i18next";
import enJson from './Translations/en.json';
import espJson from './Translations/esp.json';
import ptBRJson from './Translations/ptBR.json';

i18n
.use(initReactI18next)
.init({

fallbackLng: "en",

interpolation: {

    escapeValue: false
 },
 resources:{

en:enJson,
esp:espJson,
ptBR:ptBRJson
   
  }
})

export default i18n;