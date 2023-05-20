import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ReactLogo } from './Sticky.svg'
import Tooltip from '@mui/material/Tooltip';
import store from '../../store';

function StickyButton(props) {
    const navigate = useNavigate();
    const isAuthenticated = store.getState().auth.isAuthenticated;

    const handleClick = () => {
        navigate('/addpost');
    }


    return (
        <div className='sticky-button'>
            {isAuthenticated ? (
                <Tooltip title="Add new post" placement="right">
                    <ReactLogo className='svg-button' onClick={handleClick} />
                </Tooltip>
            ) : (
                <div></div>
            )
            }
        </div>
    );
}

export default StickyButton;