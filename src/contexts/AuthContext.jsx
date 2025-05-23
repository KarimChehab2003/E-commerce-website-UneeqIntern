import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = (userData) => {
        setCurrentUser(userData);
        setIsAuthenticated(true)
    }

    const logout = () => {
        setCurrentUser(null)
        setIsAuthenticated(false);
    }

    return <AuthContext.Provider value={{ currentUser, login, logout, isAuthenticated }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);