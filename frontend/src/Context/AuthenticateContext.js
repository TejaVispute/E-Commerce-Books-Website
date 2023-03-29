import { createContext, useContext, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer/UseReducer";
const authContext = createContext();


function AuthContextProvider({ children }) {
    const [useData, setUserData] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState)
    return <authContext.Provider value={{ state, dispatch, useData, setUserData }}>{children}</authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { AuthContextProvider, useAuth }