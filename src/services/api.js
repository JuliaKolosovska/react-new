import axios from "axios";

let axiosInstance= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users',
headers:{'Content-Type':'application/json'}
});

const getUsers=()=> {
    return axiosInstance.get()
}
const getPosts=(id)=>{
    return axiosInstance.get('/'+id+'posts')}

export {getUsers, getPosts}