import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../components/layout/DiscoverCard";
import FilterBar from "../components/layout/FilterBar";
import axios from 'axios';

function Discover() {

    const [posts, setPosts] = useState([]);
    const [postsToShow, setPostsToShow] = useState([]);
    const [name] = useState(useParams().name);

    const filterPosts = (filterType, eventKey) => {
        if (eventKey === 'all') {
            setPostsToShow(posts);
        }
        else {
            if (isNaN(eventKey)) {
                setPostsToShow(posts.filter(post => post[filterType].toLowerCase().includes(eventKey.toLowerCase())));
            }
            else {
                setPostsToShow(posts.filter(post => post[filterType] === eventKey));
            }
        }
    };


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/posts/`)
            .then(response => {
                setPosts(response.data);
                if (name === undefined) {
                    setPostsToShow(response.data);
                }
                else {
                    setPostsToShow(response.data.filter(post => post.name.toLowerCase().includes(name.toLowerCase())));
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const fetchData = () => {
        if (postsToShow.length === 0) {
            return <div className="center text-white">No posts found</div>;
        }
        return postsToShow.map((post, index) => {
            return <Card obj={post} key={index} />;
        });
    };

    return (
        <div className="content" style={{ fontFamily: "monospace" }}>
            <h3 className="center text-white">Discover the world of Animals</h3>
            <div className="center text-white">
                <FilterBar obj={posts} filterPosts={filterPosts} />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {fetchData()}
            </div>
        </div>);
}

export default Discover;
