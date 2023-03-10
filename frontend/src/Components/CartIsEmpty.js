import React from 'react'
import '../Components css/cartIsEmpty.css'
import { Link } from 'react-router-dom'
// cart is empty 
const CartIsEmpty = () => {
    return (
        <div className='cart-empty flex'>
            <div className="image-cart">
                <img src="https://thumbs.dreamstime.com/b/shopping-cart-dictionary-books-d-rendering-isolated-white-background-93393542.jpg" alt="" />
            </div>
            <div className="text p-4 text-center">
                <div className='fw-bold'>Your cart ie empty!</div>
                <div>add items it now.</div>
            </div>

            <div className="cart-empty-btn">
                <Link to='/allbooks'>  <button className='shop-now-cart btn btn-primary '>Shop Now</button></Link>
            </div>
        </div>
    )
}
export default CartIsEmpty