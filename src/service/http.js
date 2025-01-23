import axios from "axios";

// Create an Axios instance
const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// Add a request interceptor to attach the Bearer token
http.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = localStorage.getItem("token");

    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle any errors with the request
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle 401 errors
http.interceptors.response.use(
  (response) => response, // Simply return the response if successful
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear the token from local storage
      localStorage.removeItem("token");

      // Refresh the page to redirect to login or update the app state
      window.location.reload();
    }
    // Reject the error so it can be caught later
    return Promise.reject(error);
  }
);

export default http;
