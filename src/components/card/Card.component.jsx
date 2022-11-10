import Button from '../../buttons/Button.component';
import './card.styles.css';

const Card = ({
  img,
  company,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
}) => {
  return (
    <div className={`card ${isFeatured ? 'border' : ''}`}>
      <div className='logo-container'>
        <img src={img} alt='Company logo' />
      </div>
      <div className='card-body'>
        <div className='card-header'>
          <h2>{company}</h2>
          {isNew && <span className='badge'>NEW!</span>}
          {isFeatured && <span className='badge badge-dark'>FEATURED</span>}
        </div>
        <h3>{position}</h3>
        <div className='details'>
          <span>{postedAt}</span> • <span>{contract}</span> • <span>{location}</span>
        </div>
      </div>
      <div className='button-container'>
        {role && <Button value={role} />}
        {level && <Button value={level} />}
        {languages.length > 0
          ? languages.map(language => <Button key={language} value={language} />)
          : null}
        {tools.length > 0 ? tools.map(tool => <Button key={tool} value={tool} />) : null}
      </div>
    </div>
  );
};

export default Card;
