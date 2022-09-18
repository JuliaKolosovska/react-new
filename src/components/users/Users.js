import {useEffect, useState} from "react";
import User from "../user/User"
import {getUsers} from "../../services/api";
import {getPosts} from "../../services/api";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    const lift = (obj) => {
setUser(obj);
    };

useEffect(() => {

   getUsers().then(value=>setUsers(value.data))

}, []);

return (<div>
    {user && <div> {JSON.stringify(user)}</div>}
    <hr/>

        {users.map((user, index) => (<User
                item={user}
                key={index}
            lift={lift}/>))}
</div>
);
}


