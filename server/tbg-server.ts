import axios from 'axios';

const server = axios.create({
    baseURL: "https://api.tripboysgang.shop"
})

export default server;
