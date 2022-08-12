import { fireEvent, render, screen } from '@testing-library/react';
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
  // ['0', 'zero-key'],
  ['.', 'digit-key'],
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

test('adds correctly', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByText('10')).toBeInTheDocument();
});

test('subtracts correctly', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('−'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByText('97')).toBeInTheDocument();
});

test('multiplies correctly', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('×'));
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByText('72')).toBeInTheDocument();
});

test('divides correctly', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('÷'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByText('25')).toBeInTheDocument();
});

test('handles divide by zero', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('÷'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByText('Err')).toBeInTheDocument();
});
