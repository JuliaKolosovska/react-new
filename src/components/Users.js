import {useEffect, useState} from "react";
export default function Users(){
    let [users, setUsers]=useState([]);
    let [user, setUser]=useState([]);
}
useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        })

}), []);

return(<div>
    {user && <div> {user.name}</div>}
<hr/>

    {users.map((user, index)=>(<User item={user} key={user.id}))}
</div>)

