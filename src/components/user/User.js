import React from 'react';
import {userService} from "../../services";

const User = ({user, detUserId}) => {
    return (
        <div>
            <h3>{user.id} -- {user.name}</h3>
            <button onClick={() => getUserId(user.id)}>Click me</button>
        </div>
    );
};

export {User};