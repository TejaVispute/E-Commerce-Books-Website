import React from 'react'
import BooksCard from '../Components/BooksCard'
import { useState, useEffect } from 'react';
import "../Pages css/products.css"
import SkletonLoad from '../Components/SkletonLoad';
export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
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



    const filterBooks = (value) => {
        let filtered = data.filter((e) => e.categories === value)
        setFilter(filtered)
    }

    return (
        <>
            <div id='books wrapper'>

                <div className="heading py-4 my-4  text-center">
                    <h1>On Sale</h1>

                    <div className="categories-wrapper flex">
                        <div className="categories me-2">
                            <button onClick={() => setFilter(data)} className='btn btn-outline-dark'>All </button>
                        </div>

                        <div className="categories me-2">
                            <button onClick={() => filterBooks("comics")} className='btn btn-outline-dark'>Comics</button>
                        </div>

                        <div className="categories me-2">
                            <button onClick={() => filterBooks("Novels")} className='btn btn-outline-dark'>Novels</button>
                        </div>
                        <div className="categories me-2">
                            <button onClick={() => filterBooks("relegius")} className='btn btn-outline-dark'>Relegius</button>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="books-collection container">
                    {isLoading ? <SkletonLoad /> : <BooksCard filter={filter} />}
                </div>
            </div>
        </>
    )
}
