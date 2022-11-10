import { createContext, useEffect, useState } from 'react';
import data from '../data';

export const QueryContext = createContext([]);

const QueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState([]);
  const [items, setItems] = useState(data);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const newFilteredItems = items.filter(item => {
      const arr1 = Object.values(item);
      const arr2 = arr1.flat();
      return query.every(el => arr2.includes(el));
    });
    if (query.length === 0) {
      setFilteredItems(items);
    } else {
      setFilteredItems(newFilteredItems);
    }
  }, [items, query]);

  return (
    <QueryContext.Provider value={{ query, setQuery, filteredItems }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContextProvider;
