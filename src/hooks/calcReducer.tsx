type Operation = '÷' | '×' | '−' | '+' | '=';

export interface CalcState {
  firstOperand: string | null;
  secondOperand: string | null;
  outputValue: string | null;
  currOperand: 'firstOperand' | 'secondOperand';
  currOperation: Operation | null;
}

export interface CalcReducerAction {
  type: 'ENTER_DIGIT' | 'ENTER_OPERATOR' | 'ENTER_MODIFIER';
  payload: string;
}

export const initialState: CalcState = {
  firstOperand: null,
  secondOperand: null,
  outputValue: null,
  currOperand: 'firstOperand',
  currOperation: null,
};

const getOperation = (operation: Operation) => {
  if (operation === '÷')
    return (first: string, second: string) =>
      second === '0' ? 'Err' : Number(first) / Number(second);
  if (operation === '×')
    return (first: string, second: string) => Number(first) * Number(second);
  if (operation === '−')
    return (first: string, second: string) => Number(first) - Number(second);
  if (operation === '+')
    return (first: string, second: string) => Number(first) + Number(second);
  else return (first: string, second: string) => Number(second);
};

export const calcReducer = (
  state: CalcState,
  action: CalcReducerAction
): CalcState => {
  switch (action.type) {
    case 'ENTER_DIGIT':
      const newOperand =
        !state[state.currOperand] || isNaN(Number(state[state.currOperand]))
          ? action.payload
          : state[state.currOperand]?.concat(action.payload);
      return { ...state, [state.currOperand]: newOperand };
    case 'ENTER_OPERATOR':
      if (state.currOperand === 'firstOperand') {
        if (action.payload === '=') {
          return state;
        } else {
          const newCurrOperand = 'secondOperand';
          const newCurrOperation = action.payload as Operation;
          return {
            ...state,
            currOperand: newCurrOperand,
            currOperation: newCurrOperation,
          };
        }
      } else {
        const operator =
          action.payload === '=' && state.currOperation
            ? state.currOperation
            : (action.payload as Operation);
        const calculation = getOperation(operator)(
          state.firstOperand as string,
          state.secondOperand as string
        );
        const newOutputValue =
          calculation === 'Err' || isNaN(calculation as number)
            ? 'Err'
            : calculation.toString();
        const newFirstOperand = newOutputValue;
        const newCurrOperand = 'firstOperand';
        return {
          ...state,
          outputValue: newOutputValue,
          firstOperand: newFirstOperand,
          secondOperand: null,
          currOperand: newCurrOperand,
          currOperation: null,
        };
      }
    case 'ENTER_MODIFIER':
      if (action.payload === 'AC') {
        return { ...initialState };
      } else if (action.payload === '±') {
        if (state[state.currOperand]) {
          const newOperand =
            state?.[state.currOperand]?.[0] === '-'
              ? state[state.currOperand]?.slice(1)
              : '-'.concat(state[state.currOperand] as string);
          return { ...state, [state.currOperand]: newOperand };
        } else return { ...state };
      } else {
        if (isNaN(Number(state[state.currOperand]))) return { ...state };
        else {
          const newOperand = Number(state[state.currOperand]) / 100;
          return { ...state, [state.currOperand]: newOperand };
        }
      }
    default:
      return { ...state };
  }
};
