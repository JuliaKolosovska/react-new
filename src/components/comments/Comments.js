import React, {useEffect, useState} from 'react';


import {Comment} from '../comment/Comment';
// import UserForm from '../User.form/UserForm';
// import {userService} from "../../services";

const Comments = ({comments}) => {

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;