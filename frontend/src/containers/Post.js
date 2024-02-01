import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Share from "../components/layout/Share"


function AnimalPost() {

    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${id}`)
            .then(res => {
                setPost(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
          

  return (
  <Share obj={post} ></Share>
  );
}

export default AnimalPost;
