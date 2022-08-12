import './styles/Calculator.scss';
import { Key } from './components/Key';
import { Display } from './components/Display';
import {
  calcReducer,
  initialState,
  CalcReducerAction,
} from './hooks/calcReducer';
import { SyntheticEvent, useReducer } from 'react';

export type KeyClass = 'mod-key' | 'operator-key' | 'digit-key' | 'zero-key';

const keys: [string, KeyClass][] = [
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
  ['.', 'digit-key'],
  ['=', 'operator-key'],
];

export const Calculator = () => {
  const [calcState, dispatch] = useReducer(calcReducer, initialState);

  const getActionType = (className: KeyClass): CalcReducerAction['type'] => {
    if (className === 'digit-key' || className === 'zero-key')
      return 'ENTER_DIGIT';
    else if (className === 'operator-key') return 'ENTER_OPERATOR';
    else return 'ENTER_MODIFIER';
  };

  const handleClick = (e: SyntheticEvent) => {
    const type = getActionType(e.currentTarget.className as KeyClass);
    const payload = e.currentTarget.innerHTML;
    dispatch({ type, payload });
  };

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
          <Display {...calcState} />
          <div className="key-container">
            {keys.map(([keyName, className]) => (
              <Key
                key={keyName}
                keyName={keyName}
                className={className}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
