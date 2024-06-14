import axios from 'axios';

const server = axios.create({
    baseURL: "http://ec2-100-29-11-132.compute-1.amazonaws.com"
})

export default server;
