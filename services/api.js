import axios from "axios";
import urls from "../constants/urls";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || urls.API_URL,
});

export default api;
