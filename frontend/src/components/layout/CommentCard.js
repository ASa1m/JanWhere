import Card from 'react-bootstrap/Card';
import React from 'react';
import Avatar from '@mui/material/Avatar';

function CommentCard(props) {


    return (
        <Card className={"comments card flex-row"}>
            <div className={"col-2 d-flex align-items-center flex-wrap"}>
                <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                    {props.obj.user_id ? props.obj.user_id[0] : "U"}
                </Avatar>
            </div>
            <div className="card-content col-10">
                <div className='font-weight-bold'>{props.obj.user_id}</div>
                <div>
                    <div>
                        {props.obj.content}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CommentCard;