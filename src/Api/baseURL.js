import axios from "axios";

const baseUrl = axios.create({ baseURL: "http://localhost:8000" });
// const baseUrl = axios.create({ baseURL: "https://ecommerce-back-end-node-8.herokuapp.com/" });

export default baseUrl;
