import React from 'react'
import { Link } from 'react-router-dom';
import '../Components css/bookscard.css'
import { useBook } from '../Context/BookContext';

function BooksCard({ filter }) {
  let { searchBook, setSearchBook, } = useBook();

  return (
    <>
      {
        filter.filter((book) => (
          book.name.toLowerCase().includes(searchBook.toLowerCase())
        )).map((e) => {
          let url = `/bookdetail/${e._id}`
          return (
            <Link to={url} style={{ textDecoration: "none", color: " black" }} key={e._id}>
              <div className="card text-center h-100">
                <img src={e.image} className="card-img-top" alt="not found" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">{e.name.substring(0, 10)}...</h5>
                  <p className="card-text">Categorie: {e.categories}</p>
                </div>

              </div>
            </Link>
          )
        })
      }
    </>
  )
}

export default BooksCard;