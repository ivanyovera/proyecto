import axios from "axios";

const instance = axios.create({
    baseURL: "http://www.omdbapi.com/?s="
});

export default instance;