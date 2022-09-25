import React from 'react';

const Comment = (props) => {

    let {item:comment}=props;
    return (
        <div>
            <hr/>
            <h4>Post ID: {comment.postId}, ID: {comment.id}</h4>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body} </p>
        </div>
    );
};

export default Comment;