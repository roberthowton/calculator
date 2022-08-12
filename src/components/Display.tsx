import { CalcState } from '../hooks/calcReducer';
import '../styles/Display.scss';

export const Display = ({
  firstOperand,
  secondOperand,
  currOperand,
  outputValue,
}: CalcState) => {
  const getDisplayValue = () => {
    if (outputValue && Number(outputValue) > 0) return outputValue;
    else if (currOperand === 'firstOperand' || !secondOperand)
      return firstOperand || '0';
    else return secondOperand || '0';
  };
  const displayValue = getDisplayValue();

  return (
    <div className="calc-display">
      <div>{displayValue}</div>
    </div>
  );
};
