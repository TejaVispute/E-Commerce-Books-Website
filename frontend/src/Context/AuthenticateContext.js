import { createContext, useContext, useState } from "react";

const authContext = createContext();


function AuthContextProvider({ children }) {
    const [useData, setUserData] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("");
    // console.log(isLoggedIn);
    return <authContext.Provider value={{ useData, setUserData, isLoggedIn, setIsLoggedIn }}>{children}</authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { AuthContextProvider, useAuth }