import React, {useEffect, useState} from 'react';

import {PostOfComment} from "../postOfComment/PostOfComment";
import {useParams} from "react-router-dom";

const PostsOfComment = () => {
    let {id} = useParams();
    let [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPosts({...value});
            });
    }, [id]);
    return (

        <div>

            <h3>Posts</h3>

            {posts.map(post => <PostOfComment item={post} key={post.id}/>)}
        </div>
    );
};

export {PostsOfComment}