import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'
import Picture from '../../../src/Saim.jpg'
import Caraousel from './Carousel';
export default function Share(props) {
  return (
    <div className='d-flex flex-column'>
    <div className="container flex-column flex-xs-column flex-sm-column flex-lg-row">
      <div className="share col-lg-8">
        <div className="shareWrapper ">
          <div className="shareTop">
            <img className="shareProfileImg" src={Picture} alt="/"/>
            <span className="postText">{props.obj.description}</span>
          </div>
           <Caraousel className="postImg" images={props.obj.images}></Caraousel>
          <hr className="shareHr"/>
          <div className="shareBottom justify-content-center justify-content-lg-between">
            <div className="d-flex">
              <div className="shareOption">
                <FavoriteBorderIcon htmlColor= "#2979FF" className="shareIcon"/>
                <span className="shareOptionText">Like</span>
              </div>
              <div className="shareOption">
                <ChatBubbleOutlineIcon htmlColor= "#2979FF" className="shareIcon"/>
                <span className="shareOptionText">Comment</span>
              </div>
              <div className="shareOption">
                <ShareIcon htmlColor= "#2979FF" className="shareIcon"/>
                <span className="shareOptionText">Share</span>
              </div>
            </div>
              <div>
                123
              </div>
          </div>
        </div>
      </div>
      <div className="comment col-lg-4">
        <input placeholder="Write a comment" className="shareInput"/>

      </div>
      </div>
      <div className='container'>
        1234
      </div>
    </div>

  )
}



