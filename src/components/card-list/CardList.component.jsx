import { useContext } from 'react';
import { QueryContext } from '../../contexts/query.context';

import Card from '../card/Card.component';
import './card-list.styles.css';

const CardList = () => {
  const { filteredItems } = useContext(QueryContext);

  return (
    <div className='card-list-container'>
      {filteredItems.map(item => (
        <Card
          key={item.id}
          img={item.logo}
          company={item.company}
          position={item.position}
          postedAt={item.postedAt}
          contract={item.contract}
          location={item.location}
          isFeatured={item.featured}
          isNew={item.new}
          role={item.role}
          level={item.level}
          languages={item.languages}
          tools={item.tools}
        />
      ))}
    </div>
  );
};

export default CardList;
