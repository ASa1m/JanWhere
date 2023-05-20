import Card from 'react-bootstrap/Card';
import React from 'react';
import PlaceHoder from '../../placeholder-image.png';

function CommentCard(props) {


    return (
        <Card className={"comments card flex-row"}>
            <div className={"col-2 d-flex align-items-center flex-wrap"}>
                <img className='cmntProfileImg' variant="top" src={props.image === '' ? PlaceHoder : props.image} alt="Animal Placeholder" width={'100%'} height={'auto'} />
            </div>
            <div className="card-content col-10">
                <div className='font-weight-bold'>{props.name}</div>
                <div>
                    <div>
                        {props.comment}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CommentCard;