import axios from "axios"
const api = axios.create({
  baseURL: "https://ragokan-mern.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
