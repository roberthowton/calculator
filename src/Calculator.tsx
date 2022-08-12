import './styles/Calculator.scss';
import { Key } from './components/Key';
import { Display } from './components/Display';

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

export const Calculator = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <header>
        <h1>Calculator</h1>
      </header>
      <main>
        <div className="calc-container">
          <Display value={''} />
          <div className="key-container">
            {keys.map(([keyName, className]) => (
              <Key key={keyName} keyName={keyName} className={className} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
