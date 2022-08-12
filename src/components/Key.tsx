import '../styles/Key.scss';
interface KeyProps {
  className: string;
  keyName: string;
}

export const Key = ({ className, keyName }: KeyProps) => {
  return <button className={className}>{keyName}</button>;
};
