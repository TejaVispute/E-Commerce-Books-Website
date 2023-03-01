import React from 'react'
import { Link } from 'react-router-dom';
import '../Components css/bookscard.css'
import { useBook } from '../Context/BookContext';

function BooksCard({ filter }) {
  let { searchBook, setSearchBook, } = useBook();
  return (
    <>
      {
        filter.map((e) => {
          let url = `/bookdetail/${e._id}`
          return (
            <Link to={url} style={{ textDecoration: "none", color: " black" }}>
              <div class="card text-center h-100">
                <img src={e.image} class="card-img-top" alt="not found" height="250px" />
                <div class="card-body">
                  <h5 class="card-title">{e.name.substring(0, 10)}...</h5>
                  <p class="card-text">Categorie: {e.categories}</p>
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