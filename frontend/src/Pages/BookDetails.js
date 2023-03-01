import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBook } from '../Context/BookContext';
import '../Pages css/bookdetail.css'
function BookDetails() {
    const { data } = useBook();
    let { id } = useParams();

    let findBook = data.find((book) => book._id === id);
    console.log(findBook)
    return (
        <>
            <div className="product-detail container">
                <div className="topbar">
                    <i class="fa-solid fa-arrow-left"></i>  <Link to='/'>back</Link>
                </div>
                <div className="detail-wrapper flex">

                    <div className="image-left-section">
                        <img src={findBook.image} alt="" />
                    </div>

                    <div className="book-detail-right-section">
                        <h1>{findBook.name}</h1>
                        <h1>{findBook.price} /-</h1>
                    </div>
                </div>
            </div>



        </>
    )
}

export default BookDetails