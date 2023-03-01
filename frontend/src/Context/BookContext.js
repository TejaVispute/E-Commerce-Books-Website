import { createContext, useContext } from "react";

const BookContext = createContext();


function BookContextProvider({ children }) {

    return <BookContext.Provider value={"hello"}>{children}</BookContext.Provider>
}


const useBook = () => useContext(BookContext);


export { BookContextProvider, useBook };