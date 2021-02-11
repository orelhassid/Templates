import axios from "axios";
import { API, TOKEN, USER } from "../config";
// import http from "../services/http";

const HTTP = axios.create({ baseURL: "https://api.github.com" });

// HTTP.interceptors.request.use((req) => {
//   if (localStorage.getItem(USER)) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem(USER)).token
//     }`;
//   }

//   return req;
// });

export const getRepos = (username) => HTTP.get(`/users/${username}/repos`);
