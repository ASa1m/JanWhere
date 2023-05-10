import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import PlaceHoder from '../../placeholder-image.png';
import '../../styles/App.css';

function RCard(props) {
  return (
    <Card style={{ border: 'solid 1px', display: 'flex', flexDirection: props.direction === 'right' ? 'row-reverse' : 'row' }}>
        <div style={{ width: '30%', height: '100%' }}>
        <Card.Img className='img-fluid bg-img' variant="top" src={props.image === '' ? PlaceHoder : props.image} alt="Animal Placeholder" width ={'100%'} height={'auto'} />
        </div>
        <div className= "card-content" style={{ width: '70%', height: '100%' }}>
      <Card.Header as="h5">{props.feature}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="truncate" style={{ margin: '1rem 0' }}>
            {props.description}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
        </div>
    </Card>
  );
}

export default RCard;