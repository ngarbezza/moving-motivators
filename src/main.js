import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

import en from './translate/en.json';
import es from './translate/es.json';

const messages = { en, es };

const i18n = createI18n({
  locale: 'es', // set locale
  messages, // set locale messages
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
