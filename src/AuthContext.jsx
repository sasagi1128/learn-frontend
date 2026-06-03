import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  async function login(username, password) {
    if (username === "Sasagi" && password === "pikachu") {
      const fakeToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYXNoIn0.mock_signature";
      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
      return { success: true };
    }
    return { success: false, error: "Invalid username or password" };
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}