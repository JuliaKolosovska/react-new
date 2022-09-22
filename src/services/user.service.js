import {axiosService} from "./axios.service";
import {urls} from "../cofigs";

const userService={
    getAll:()=>axiosService.get(urls.users),
    createUser:(user)=>axiosService.post(urls.users, user),
    getUserId:(id)=>axiosService.get(`${urls.users}${id}`),

}

export {userService}