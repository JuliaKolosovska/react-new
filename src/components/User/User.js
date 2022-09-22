import React from 'react';
import css from './User.module.css';


const User = ({user}) => {


    return (
        <div className={css.User}>
            <div>
             <div>{user.id}. {user.name} {user.surname}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>

            </div>
        </div>
    );
};

export {User};