import React from 'react';
import css from './Comment.module.css';


const Comment = ({comment}) => {


    return (
        <div className={css.Comment}>
            <div>
             <div>{comment.id}. {comment.name} </div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>

            </div>
        </div>
    );
};

export {Comment};