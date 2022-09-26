import {axiosServices} from "./axiosServises";

import {_urls} from "../../configs";


const apiService={
    getAll:()=>axiosServices.get(_urls.comments)

}