import React from 'react';
import {Link} from "react-router-dom";

const Comment = (props) => {

    let {item:comment}=props;
    return (
        <Link to={`/post/${comment.postId}`}>
            <div>
            <hr/>
            <h4>Post ID: {comment.postId}, ID: {comment.id}</h4>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body} </p>
        </div>
        </Link>
    );
};

export default Comment;