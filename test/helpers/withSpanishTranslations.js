import { createI18n } from 'vue-i18n';
import es from '../../src/locales/es.json';

const i18nSpanish = createI18n({
  locale: 'es',
  messages: {
    es,
  },
});

export default {
  global: {
    plugins: [i18nSpanish],
  },
};
