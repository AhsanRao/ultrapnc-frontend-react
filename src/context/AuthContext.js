import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );

  axios.defaults.baseURL = API_BASE_URL;

  axios.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  let isRefreshing = false;
  let refreshSubscribers = [];

  const processQueue = (error, token = null) => {
    refreshSubscribers.forEach((cb) => cb(error, token));
    refreshSubscribers = [];
  };

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        refreshToken
      ) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            refreshSubscribers.push((error, token) => {
              if (error) {
                reject(error);
              } else {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                resolve(axios(originalRequest));
              }
            });
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const response = await axios.post("/auth/token/refresh/", {
            refresh: refreshToken,
          });

          const newAccessToken = response.data.access;
          setAccessToken(newAccessToken);
          localStorage.setItem("accessToken", newAccessToken);

          processQueue(null, newAccessToken);
          return axios(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          logout();
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const initializeAuth = async () => {
      if (accessToken) {
        try {
          const response = await axios.get("/auth/profile/");
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user profile:", error);
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, [accessToken]);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/auth/login/", { email, password });
      const { access, refresh, user: userData } = response.data;

      setAccessToken(access);
      setRefreshToken(refresh);
      setUser(userData);

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      return userData;
    } catch (error) {
      console.error("Login error:", error);
      throw error.response?.data || "Login failed";
    }
  };

  const register = async (email, username, password) => {
    try {
      const response = await axios.post("/auth/register/", {
        email,
        username,
        password,
      });
      return response.data;
    } catch (error) {
      if (error.response?.data?.errors) {
        const simplifiedErrors = Object.entries(
          error.response.data.errors
        ).reduce((acc, [key, value]) => {
          acc[key] = Array.isArray(value) ? value[0] : value;
          return acc;
        }, {});
        throw simplifiedErrors;
      }
      throw "Registration failed";
    }
  };

  const logout = async () => {
    try {
      await axios.post("/auth/logout/", { refresh: refreshToken });
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setAccessToken(null);
      setRefreshToken(null);
      setUser(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };

  const updateProfile = async (userData) => {
    try {
      const response = await axios.put("/auth/profile/", userData);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error.response?.data || "Profile update failed";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        updateProfile,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
