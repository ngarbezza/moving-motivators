import { config } from '@vue/test-utils';
import es from '../../src/translate/es.json';

const inSpanish = (msg) => {
  const keys = msg.split('.');
  return keys.reduce((value, key) => value[key], es);
};

config.global.mocks = {
  $t: inSpanish,
};

export default inSpanish;
