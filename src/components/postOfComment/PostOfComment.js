import React from 'react';


const PostOfComment = (props) => {
    let {item: post} = props;
    return (

        <div>
            <hr/>
            <h4>User ID: {post.userId}, ID: {post.id}</h4>
            <p>Title: {post.title}</p>
            <p>Body: {post.body} </p>
        </div>

    );
};

export {PostOfComment}