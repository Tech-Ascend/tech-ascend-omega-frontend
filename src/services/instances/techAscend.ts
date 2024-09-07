import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});
const handleLogout = async () => {
  try {
    // Perform logout
    localStorage.removeItem("token");

    // Redirect to login
    window.location.href = "/";
  } catch (error) {
    // Handle any errors that occur during the logout process
    console.error(error);
  }
};

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return { ...config };
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Axios Response interceptor
instance.interceptors.response.use(
  (response) => {
    // Log the response headers
    if (response.headers["x-token-expired"] === "true") {
      handleLogout();
    }
    return response;
  },
  (error) => {
    if (error?.response?.headers["x-token-expired"] === "true") {
      handleLogout();
    }

    return Promise.reject(error);
  },
);

export default instance;
