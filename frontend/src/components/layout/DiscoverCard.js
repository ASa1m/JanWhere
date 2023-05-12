import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import PlaceHoder from '../../placeholder-image.png';
import { useNavigate } from 'react-router-dom';

function RCard(props) {

  const navigate = useNavigate();

  const handleClick = () => {
      console.log(props.id);
      navigate('/post/' + props.id);
  }

  return (
    <Card className={"card flex-sm-column flex-lg-"+ ((props.direction === 'right') ? 'row' : 'row-reverse')} >
        <div className={"col-lg-4 col-md-12  h-100"}>
        <Card.Img className='img-fluid bg-img' variant="top" src={props.image === '' ? PlaceHoder : props.image} alt="Animal Placeholder" width ={'100%'} height={'auto'} />
        </div>
        <div className= "card-content col-8 h-100">
      <Card.Header as="h5">{props.feature}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-truncate" style={{ margin: '1rem 0' }}>
            {props.description}
        </Card.Text>
        <Button variant="primary" style={{backgroundColor: '#FFC947', color: '#46237A'}} onClick={handleClick}>Learn More</Button>
      </Card.Body>
        </div>
    </Card>
  );
}

export default RCard;