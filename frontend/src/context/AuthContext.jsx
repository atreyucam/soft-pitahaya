import React, { createContext, useState } from "react";
import { loginUser } from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    user: null,
    isAuthenticated: false,
  });

  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      localStorage.setItem("accessToken", data.accessToken);
      setAuth({
        token: data.accessToken,
        user: data.usuario,
        isAuthenticated: true,
      });
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuth({ token: null, user: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
