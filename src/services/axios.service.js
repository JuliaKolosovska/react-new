import axios from "axios";

import {baseURL} from "../cofigs";


const axiosService = axios.create({baseURL})

export {axiosService}
