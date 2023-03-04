import React from 'react'
import '../Pages css/allbooks.css';
import BooksCard from '../Components/BooksCard';
import { useBook } from '../Context/BookContext';

function AllBooks() {
    let { filter } = useBook();
    // console.log(filter);

    let Novels = filter.filter((value) => {
        return value.categories === "Novels"
    })
    let Comics = filter.filter((value) => {
        return value.categories === "comics"
    })

    return (
        // All products page,all products wil display here
        <div className="main-allbook-wrapper">
            <div className="new-arriwals flex">
                <div className='me-2'><h4>New Arrivals By Categories</h4></div>
                <div > <span className='me-2'>Home</span>  <i class="fa-solid fa-house"></i></div>
            </div>

            <div className='text-center' style={{backgroundColor:"tomato"}}> <h1>Novels</h1></div>

            <div className="book-section">

                <BooksCard filter={Novels} />
            </div>
            <div className='text-center'style={{backgroundColor:"tomato"}}> <h1>Comics</h1></div>
            <div className="book-section">

                <BooksCard filter={Comics} />
            </div>
        </div>
    )
}

export default AllBooks;