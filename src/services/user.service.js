import {axiosService} from "./axios.service";
import {urls} from "../cofigs";

const userService={
    getAll:()=>axiosService.get(urls.users),
    create:(user)=>axiosService.post(urls.users, user),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`),

}

export {userService}