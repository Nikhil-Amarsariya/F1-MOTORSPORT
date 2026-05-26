import { useState } from "react";
import { AuthStateContext } from "./AuthStateContext";

const getSavedUser = () => {
  try {
    const savedUser = localStorage.getItem("f1User");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    localStorage.removeItem("f1User");
    return null;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("f1User", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("f1User");
  };

  return (
    <AuthStateContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthStateContext.Provider>
  );
}
