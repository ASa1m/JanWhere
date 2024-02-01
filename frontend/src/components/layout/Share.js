import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'
import CommentCard from './CommentCard'
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { connect } from "react-redux";
import Caraousel from './Carousel';
import axios from 'axios';
import Icon from "../../../src/map-marker.png";
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import store from "../../store";


const Share = (props ) => {

  const [comments, setComments] = useState([]);
  const [likeState, setLikeState] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const commentRef = React.createRef();
  const isAuthenticated = store.getState().auth.isAuthenticated;

  const { id } = useParams();
  const currentUrl = window.location.href;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) return;


    const newComment = {
      user_id: props.currentUser.name,
      content: e.target.newcomment.value
    }

    axios.post(`${process.env.REACT_APP_API_URL}/api/posts/${props.obj._id}/addcomment`, newComment)
      .then(res => setComments(res.data))

    e.target.newcomment.value = "";

  }

  const handleCommentClick = () => {
    if (!isAuthenticated) return;
    commentRef.current.focus();
  };

  const handleShareClick  = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      console.log('Text copied to clipboard!');
      alert ("Link Copied to Clipboard");
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error);
    }
  };

  const fetchComments = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/posts/${id}`)
      .then(res => {
        setComments(res.data.comments);
      
        const currentUserID = props.currentUser.id;
        const likedByCurrentUser = res.data.likes.some(like => like.user_id === currentUserID);
      
        setLikeState(likedByCurrentUser);
        setLikeCount(res.data.likes.length);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const likeStatus = () => {
    if (!isAuthenticated) return;
    setLikeState(!likeState);
  }

  const updateLikes = () => {
    if (!isAuthenticated) return;

    if (!likeState) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/posts/${id}/like`, { user_id: props.currentUser.id })
      .then(res => {
        setLikeCount(res.data.length);
      })
      .catch(error => {
        console.log(error);
      });
    }
    else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/posts/${id}/unlike`, { user_id: props.currentUser.id })
        .then(res => {
            setLikeCount(res.data.length);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  console.log(props.obj.location);

  useEffect(() => {
    // Fetch comments data here
    fetchComments();

  }, []);

 

  return (
    <div className='d-flex flex-column'>
      <div className="container flex-column flex-xs-column flex-sm-column flex-lg-row">
        <div className="share col-lg-8">
          <div className="shareWrapper ">
            <div className="shareTop">
              <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                {props.obj.user_id ? props.obj.user_id[0] : "U"}
              </Avatar>
              <span className="postText">{props.obj.user_id}</span>
            </div>
            <Caraousel images={props.obj.images}></Caraousel>
            <hr className="shareHr" />
            <div className='p-3'>
              <h5>{props.obj.cover}</h5>
            </div>
            <div className="shareBottom justify-content-center justify-content-lg-between">
              <div className="d-flex">
                <div className="shareOption" onClick={() => { likeStatus(); updateLikes(); }}>
                  {likeState ? <FavoriteIcon htmlColor="#2979FF" className="shareIcon" /> : <FavoriteBorderIcon htmlColor="#2979FF" className="shareIcon" />}
                  <span className="shareOptionText">Like</span>
                </div>
                <div className="shareOption" onClick={handleCommentClick}>
                  <ChatBubbleOutlineIcon htmlColor="#2979FF" className="shareIcon" />
                  <span className="shareOptionText">Comment</span>
                </div>
                <div className="shareOption" onClick={handleShareClick}>
                  <ShareIcon htmlColor="#2979FF" className="shareIcon" />
                  <span className="shareOptionText">Share</span>
                </div>
              </div>
              <div>
                {likeCount}
                <FavoriteIcon htmlColor="#2979FF" className="shareIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="comment col-lg-4">
          <form onSubmit={handleSubmit}>
            {isAuthenticated ? (
            <input placeholder="Write a comment" className="shareInput" name='newcomment' ref={commentRef}  />
            ) : (
              <input placeholder='Please Sign in' disabled />
            )}
            <button type='submit' hidden></button>
          </form>
          <div className='p-2 comment-container'>
            {comments.length > 0 ? (
              comments.map((comment, i) => (
                <CommentCard key={i} obj={comment} />
              ))
            ) : (
              <div className='p-3'>No comments yet</div>
            )}
          </div>
        </div>
      </div>
      <div className='container col-lg-8'>

        {props.obj.content}
      </div>
      <div className='container col-lg-4'>
      {!isLoaded ? (
          <h1 className="center text-white">Loading Location</h1>
        ) : (
          props.obj.location &&
      <GoogleMap
            mapContainerClassName="location-container"
            center={{ lng: parseFloat(props.obj.location.longitude), lat: parseFloat(props.obj.location.latitude) }}
            zoom={10}
            options={{ mapId: process.env.REACT_APP_GOOGLE_MAP_ID, disableDefaultUI: true, zoomControl: true, styles: [{ "featureType": "poi", "stylers": [{ "visibility": "off" }] }] }}
          >
            <Marker position={{ lat: parseFloat(props.obj.location.latitude), lng: parseFloat(props.obj.location.longitude) }} icon={{ "url": Icon, "scaledSize": new window.google.maps.Size(50, 50) }} >

            </Marker>
          </GoogleMap>
        )}
      </div>
    </div>

  )
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
});

export default connect(mapStateToProps)(Share);



