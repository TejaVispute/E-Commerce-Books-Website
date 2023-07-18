import { createContext, useContext, useEffect, useState } from "react";
const BookContext = createContext();
const getFromLocal = JSON.parse(localStorage.getItem("cart") || "[]")

function BookContextProvider({ children }) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
    const [searchBook, setSearchBook] = useState("");
    const [cart, setCart] = useState(getFromLocal);
    console.log(data)

    async function fetchData() {
        setIsLoading(true);
        await fetch("http://localhost:4000/books")
            .then((response) => response.json())
            .then((data) => {

                setIsLoading(false);
                setFilter(data);
                setData(data)

            });
    }
    useEffect(() => {

        fetchData();
    }, [])





    
    let allStates = { data, setData, filter, setFilter, isLoading, setIsLoading, searchBook, setSearchBook, cart, setCart }
    return <BookContext.Provider value={allStates}>{children}</BookContext.Provider>
}


const useBook = () => useContext(BookContext);


export { BookContextProvider, useBook };