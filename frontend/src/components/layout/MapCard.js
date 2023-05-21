import Card from 'react-bootstrap/Card';
import React from 'react';
import PlaceHoder from '../../placeholder-image.png';

function MapCard(props) {


    return (
        <Card className={"card flex-row flex-sm-row flex-md-column flex-lg-row m-3"} onClick={props.clickhandle}>
            <div className={"col-lg-4 col-md-12  h-100"}>
                <Card.Img className='img-fluid bg-img' variant="top" src={props.image === '' ? PlaceHoder : props.image} alt="Animal Placeholder" width={'100%'} height={'auto'} />
            </div>
            <div className="card-content col-md-12 col-lg-8 h-100">
                <Card.Header as="h5">{props.name}</Card.Header>
            </div>
        </Card>
    );
}

export default MapCard;