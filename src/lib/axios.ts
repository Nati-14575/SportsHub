import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

if (!baseURL) {
  console.warn("⚠️ VITE_API_BASE_URL is missing in your .env file");
}

export const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Global error interceptor
api.interceptors.response.use(
  (res) => res,
  (err) => {
    let message = "Unexpected error occurred";

    if (err.code === "ECONNABORTED") {
      message = "Request timed out";
    }

    if (err.response?.status === 404) {
      message = "Resource not found";
    }

    if (err.response?.status === 500) {
      message = "Server is not responding right now";
    }

    return Promise.reject(new Error(message));
  }
);
