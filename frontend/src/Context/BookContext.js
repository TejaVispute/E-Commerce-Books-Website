import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext();


function BookContextProvider({ children }) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
    const [searchBook, setSearchBook] = useState("");
    const [cart, setCart] = useState([]);
    let componentMuted = true;
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            await fetch("http://localhost:4000/books/")
                .then((response) => response.json())
                .then((data) => {
                    if (componentMuted) {
                        setIsLoading(false);
                        setFilter(data);
                        setData(data)
                    }
                });
        }
        fetchData();
    }, [])
    let allStates = { data, setData, filter, setFilter, isLoading, setIsLoading, searchBook, setSearchBook, cart, setCart }
    return <BookContext.Provider value={allStates}>{children}</BookContext.Provider>
}


const useBook = () => useContext(BookContext);


export { BookContextProvider, useBook };