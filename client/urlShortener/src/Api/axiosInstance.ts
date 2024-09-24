import axios from "axios";
const BaseURL= "http://localhost:5000/api";


const axiosInstance = axios.create({
  baseURL:BaseURL
});

export default axiosInstance;