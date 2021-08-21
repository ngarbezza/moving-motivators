import { render } from '@testing-library/vue';
import PrioritizedMotivators from '../../src/components/PrioritizedMotivators.vue';
import withSpanishTranslations from '../helpers/withSpanishTranslations';
import es from '../../src/locales/es.json';

test('El texto inicial es "Elige un motivador"', () => {
  const { getByText } = render(PrioritizedMotivators, withSpanishTranslations);

  expect(getByText('Elige un motivador')).toBeDefined();
});

test('Se incluyen todos los motivadores con sus descripciones', () => {
  const { getByText } = render(PrioritizedMotivators, withSpanishTranslations);

  Object.keys(es.motivators).forEach((motivator) => {
    expect(getByText(es.motivators[motivator].name)).toBeDefined();
  });
});
