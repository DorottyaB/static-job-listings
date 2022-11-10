import { useContext } from 'react';
import { QueryContext } from '../contexts/query.context';
import './button.styles.css';

const Button = ({ value }) => {
  const { query, setQuery } = useContext(QueryContext);

  function handleClick() {
    if (!query.includes(value)) {
      setQuery([...query, value]);
    } else {
      return;
    }
  }

  return <button onClick={handleClick}>{value}</button>;
};

export default Button;
