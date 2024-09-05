// src/utils/axiosInstance.js
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://192.168.1.49:8080/api", // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout (in ms)
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers you want
  },
  withCredentials: true, // Optional: Include cookies with requests (if needed)
});

export default axiosInstance;
