import { createContext, useContext } from "react";

const authContext = createContext();


function authContextProvider({ children }) {
    return <authContext.Provider value={"hello"}> children</authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { authContextProvider, useAuth }