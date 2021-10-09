import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

import en from './translate/en.json';
import es from './translate/es.json';
import it from './translate/it.json';
import de from './translate/de.json';

const messages = {
  en, es, it, de,
};
const locale = 'en';
const i18n = createI18n({ locale, messages });

const app = createApp(App);
app.use(i18n);
app.mount('#app');
