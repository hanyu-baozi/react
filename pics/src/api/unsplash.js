import axios from "axios";

//create 方法创建Axios客户端
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID NpI-Xs4C0YwS5mzOWI5LRuijUbIWHm10E24bg4kjQmM", //客户ID
  },
});
