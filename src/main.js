import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

import en from './translate/en.json';
import es from './translate/es.json';
import it from './translate/it.json';
import de from './translate/de.json';
import pt from './translate/pt.json';
import sv from './translate/sv.json';
import bn from './translate/bn.json'; 

import getDefaultLanguage from './utils/getDefaultLanguage';

const messages = {
  en,
  es,
  it,
  de,
  pt,
  sv,
  bn
};

const locale = getDefaultLanguage();
const i18n = createI18n({ locale, messages, fallbackLocale: 'en' });

const app = createApp(App);
app.use(i18n);
app.mount('#app');
