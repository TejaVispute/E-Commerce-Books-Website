import React, { useEffect } from 'react'
import BooksCard from '../Components/BooksCard'
import "../Components css/products.css"
import SkletonLoad from '../Components/SkletonLoad';
import { useBook } from '../Context/BookContext';
export default function Products() {
    let { data, filter, setFilter, isLoading, setSearchBook } = useBook();
    // console.log(value)

    const filterBooks = (value) => {
        let filtered = data.filter((e) => e.categories === value)
        setFilter(filtered)
    }


    useEffect(() => {
        filterBooks("Novels")
    }, [])

    return (
        <>
            <div id='bookswrapper'>

                {/* <div className='discount-banner'>

                    <img src="https://www.buybooksindia.com/assets/images/60-percent-discount-banner.png" alt="" />

                </div> */}
                {/* <div className="categories-wrapper flex">
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

                    </div> */}
                {/* <hr /> */}


                <div className="books-collection container">
                    {isLoading ? <SkletonLoad /> : <BooksCard filter={filter} />}

                </div>


            </div>
        </>
    )
}
