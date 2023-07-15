import './button.css';

const Button = ({ primary = false, size = 'medium', backgroundColor, label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export { Button };
