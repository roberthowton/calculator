import { SyntheticEvent } from 'react';
import '../styles/Key.scss';

interface KeyProps {
  className: string;
  keyName: string;
  handleClick: (e: SyntheticEvent) => void;
}

export const Key = ({ className, keyName, handleClick }: KeyProps) => {
  return (
    <button className={className} onClick={handleClick}>
      {keyName}
    </button>
  );
};
