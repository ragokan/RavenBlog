import axios from "axios"
const api = axios.create({
  baseURL: "http://ragokan-mern.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
