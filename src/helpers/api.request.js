import axios from "axios";

const baseURL =process.env.REACT_APP_BASEURL;
let headers={};

if(localStorage?.token){
    headers.Authorization = `Bearer ${localStorage?.token}`;
}

const axiosInstance = axios.create({
    baseURL:baseURL,
    headers,
});

export default axiosInstance;