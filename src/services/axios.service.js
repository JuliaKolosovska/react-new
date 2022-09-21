import axios from "axios";

import {baseUrl} from "../cofigs";

const axiosService=axios.create({baseURL});

export {baseUrl}
