import './Pcolor2.css'
import Card from 'react-bootstrap/Card';


function CardColor({title , description , type ,colorCode ,Photo}) {
  return (
    <div className='card-color-body-section-2'>
      <span className='color-code-span'>{colorCode}</span>
      <img className='card-image' variant="top" src={Photo} />
      <div className='p-2'>
        <h5 className='text-center'>{title}</h5>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardColor;