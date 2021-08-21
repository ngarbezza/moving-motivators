import { render } from '@testing-library/vue';
import PrioritizedMotivators from '../../src/components/PrioritizedMotivators.vue';
import motivators from '../../src/motivators';
import inSpanish from '../helpers/inSpanish';

test('El texto inicial es "Elige un motivador"', () => {
  const { getByText } = render(PrioritizedMotivators);

  expect(getByText('Elige un motivador')).toBeDefined();
});

test('Se incluyen todos los motivadores', () => {
  const { getByText } = render(PrioritizedMotivators);

  motivators.forEach((motivator) => expect(getByText(inSpanish(motivator.name))).toBeDefined());
});
