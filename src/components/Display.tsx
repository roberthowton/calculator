import '../styles/Display.scss';

interface DisplayProps {
  value: string;
}

export const Display = ({ value }: DisplayProps) => (
  <div className="calc-display">
    <div>{value}</div>
  </div>
);
