import axios from "axios";
const instance = axios.create({ 

baseURL : '...' // the api(cloud function) URL
});

export default instance;