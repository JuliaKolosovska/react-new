import React, {useEffect, useState} from 'react';


import {User} from '../User/User';
import UserForm from '../User.form/UserForm';
import {userService} from "../../services";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
userService.getAll().then(({data})=>setUsers(data))
    }, [])
    return (

        <div>
            <div> <UserForm setUsers={setUsers}/></div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;