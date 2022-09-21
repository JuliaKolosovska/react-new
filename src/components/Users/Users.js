import React, {useEffect} from 'react';
import {userService as userServise} from "../../services";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
userServise.getAll().then(({data})=>setUsers(data))
    }, [])
    return (
        <div>
            <UserForm/>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;