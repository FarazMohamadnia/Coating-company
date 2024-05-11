import './Pcolor2.css'
import Card from 'react-bootstrap/Card';

//image import
import img from '../../asset/delete/website1.png'

function CardColor({title , description , type ,colorCode ,Photo}) {
  return (
    <Card style={{width: '15rem',  backgroundColor: 'black' , color:'white' , margin:'10px' , position:'relative' , textAlign:'left'}}>
      <span className='color-code-span'>{colorCode}</span>
      <Card.Img className='card-image' variant="top" src={Photo} />
      <Card.Body>
        <h5 className='text-center'>{title}</h5>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardColor;