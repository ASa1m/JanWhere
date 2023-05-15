import Card from 'react-bootstrap/Card';
import React from 'react';
import PlaceHoder from '../../placeholder-image.png';
import { useNavigate } from 'react-router-dom';

function MapCard(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/discover/' + props.name.toLowerCase());
    }

    return (
        <Card className={"card flex-sm-column flex-lg-row m-3"} onClick={handleClick}>
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