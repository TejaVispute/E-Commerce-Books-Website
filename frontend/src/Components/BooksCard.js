import React from 'react'

function BooksCard({ filter }) {
  return (
    <>
      {
        filter.map((e) => (
          <div class="card text-center h-100">
            <img src={e.image} class="card-img-top" alt="not found" height="250px" />
            <div class="card-body">
              <h5 class="card-title">{e.name.substring(0, 10)}...</h5>
              <p class="card-text">Categorie: {e.categories}</p>
            </div>
            <button className='btn btn-outline-dark'>Buy Now</button>
          </div>
        ))
      }
    </>
  )
}

export default BooksCard;