import axios from "axios"

export const server = axios.create({
  baseURL: "https://aisummarizegf-server.onrender.com",
})
