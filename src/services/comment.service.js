import {axiosService} from "./axios.service";
import {urls} from "../cofigs";

const commentService={
    getComment: (userId)=>axiosService.get(`${urls.comments}?postId=${userId}`)
}

export {commentService}