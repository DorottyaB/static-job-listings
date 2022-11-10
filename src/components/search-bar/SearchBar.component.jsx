import { useContext } from 'react';
import { QueryContext } from '../../contexts/query.context';
import './search-bar.styles.css';

const SearchBar = () => {
  const { query, setQuery } = useContext(QueryContext);

  const element = query.map(item => {
    return (
      <div key={item} className='query-item'>
        <p>{item}</p>
        <div
          className='icon-container'
          onClick={() => {
            setQuery(query.filter(a => a !== item));
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
            <path
              fill='#FFF'
              fillRule='evenodd'
              d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
            />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <>
      {query.length > 0 && (
        <div className='query-container'>
          <div className='query-items'>{element}</div>
          <p className='clear-btn' onClick={() => setQuery([])}>
            Clear
          </p>
        </div>
      )}
    </>
  );
};

export default SearchBar;
