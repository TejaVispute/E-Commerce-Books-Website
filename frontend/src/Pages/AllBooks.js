import React, { useEffect } from 'react'
import '../Pages css/allbooks.css';
import BooksCard from '../Components/BooksCard';
import { useBook } from '../Context/BookContext';
// import SkletonLoad from '../Components/SkletonLoad';
import { AnimationLoader } from '../Components/AnimationLoader';
function AllBooks() {


    let { filter, setFilter, data, isLoading } = useBook();



    // for filtering books according to user requirements
    const filterBooks = (value) => {
        let filtered = data.filter((e) => e.categories === value)
        setFilter(filtered)
    }
    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    useEffect(() => {
        goTop();
    });



    return (
        // All products page,all products wil display here
        <>
            <div className="main-allbook-wrapper">
                {/* <div className="new-arriwals flex" >
                    <div className='me-2'><h4>New Arrivals By Categories</h4></div>
                    <div > <span className='me-2'>Home</span>  <i class="fa-solid fa-house"></i></div>
                </div > */}

                <div className='text-center'>
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
                        <div className="categories me-2">
                            <button onClick={() => filterBooks("marvel")} className='btn btn-outline-dark'>Marvel</button>
                        </div>
                    </div>

                </div>

                <div className="book-section">

                    {isLoading ? <AnimationLoader /> : <BooksCard filter={filter} />}
                </div>


            </div >
        </>
    )
}

export default AllBooks;