import {useEffect, useState} from "react";
import User from "./User"

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    const lift = (id) => {
console.log(id);
    }
}
useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        })

}, []);

return (<div>
    {user && <div> {JSON.stringify(user)}</div>}
    <hr/>

        {users
            .map((user, index) => (<User
                item={user}
                key={index}
            lift={lift}/>))}
</div>
)
