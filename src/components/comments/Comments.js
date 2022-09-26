import React, {useState} from 'react';

import Comment from "../comment/Comment";
import {Outlet} from "react-router-dom";


const Comments = () => {
    let [comments, setComments]= useState([]);
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value=>{
            setComments(value);
        });
    return (

        <div>
            <Outlet/>
            <h3>Comments</h3>

            {comments.map((comment, index)=><Comment item={comment} key={index}/>)}
        </div>
    );
};

export default Comments;