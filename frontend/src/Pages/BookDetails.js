import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBook } from '../Context/BookContext';
import '../Pages css/bookdetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BookDetails() {
    const { data, cart, setCart } = useBook();
    console.log(cart)
    let { id } = useParams();

    let findBook = data.find((book) => book._id === id);
    // console.log(findBook)


    function addToCart(findBook) {
        const CheckCart = cart.find((item) => item._id === findBook._id);
        if (CheckCart) {
            console.log("already Exists quantity + 1");
            toast.success('Already Exists quantity + 1', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setCart(cart.map((item) => item._id === findBook._id ?
                { ...CheckCart, quantity: CheckCart.quantity + 1 } : item))
        } else {
            console.log("new item");
            toast.success('Added To Cart !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setCart([...cart, { ...findBook, quantity: 1 }])
        }
    }
    return (
        <>
            <div className="product-detail container">
                <div className="topbar">
                    <i className="fa-solid fa-arrow-left"></i>  <Link to='/'>back</Link>
                </div>
                <div className="detail-wrapper flex">

                    <div className="image-left-section">
                        <img src={findBook.image} alt="" />
                    </div>

                    <div className="book-detail-right-section">
                        <h1>{findBook.name}</h1>
                        <h1>{findBook.price} /-</h1>
                        <div className="add-to-cart">
                            <button onClick={() => addToCart(findBook)} className='btn btn-primary'>Add to cart</button>
                        </div>
                    </div>

                </div>

            </div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />


        </>
    )
}

export default BookDetails