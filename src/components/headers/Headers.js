import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from'./headers.module.css'
import {LOAD_SINGLE_USER} from "../../redux";

const Headers = () => {
    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type:LOAD_SINGLE_USER, payload: +id})
    },[id]);

    return (
        <div className={css.nav_menu}>
            <div><Link to={'/'}>Main</Link></div>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
            <div>{user && (<div>{user.name}</div>)}</div>
        </div>
    )
}
export {Headers};