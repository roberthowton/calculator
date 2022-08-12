import { render, screen } from '@testing-library/react';
import { Calculator } from '../Calculator';

type keyClass =
  | 'mod-key'
  | 'operator-key'
  | 'digit-key'
  | 'dot-key'
  | 'zero-key';
const keys: [string, keyClass][] = [
  ['AC', 'mod-key'],
  ['±', 'mod-key'],
  ['%', 'mod-key'],
  ['÷', 'operator-key'],
  ['7', 'digit-key'],
  ['8', 'digit-key'],
  ['9', 'digit-key'],
  ['×', 'operator-key'],
  ['4', 'digit-key'],
  ['5', 'digit-key'],
  ['6', 'digit-key'],
  ['−', 'operator-key'],
  ['1', 'digit-key'],
  ['2', 'digit-key'],
  ['3', 'digit-key'],
  ['+', 'operator-key'],
  ['0', 'zero-key'],
  ['.', 'dot-key'],
  ['=', 'operator-key'],
];

test('renders header', () => {
  render(<Calculator />);
  const header = screen.getByText('Calculator');
  expect(header).toBeInTheDocument();
});
test('renders all calculator input keys', () => {
  render(<Calculator />);
  keys.forEach(([keyName]) => {
    const keyInstance = screen.getByText(keyName);
    expect(keyInstance).toBeInTheDocument();
  });
});
