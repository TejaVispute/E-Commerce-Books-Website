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
    const Discount = ((findBook.price - findBook.originalPrice) / findBook.price * 100).toFixed(0);


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
                    <Link to='/allbooks' style={{ textDecoration: "none", color: "black" }}> <i className="fa-solid fa-arrow-left p-2" style={{ fontSize: "1.5rem" }}></i></Link>
                </div>
                <div className="detail-wrapper flex">

                    <div className="image-left-section">
                        <img src={findBook.image} alt="not found" />
                    </div>

                    <div className="book-detail-right-section">
                        <h3>{findBook.name}</h3>
                        <h5>₹ {findBook.price} /- <span className='ms-4' style={{ textDecoration: "line-through" }}>₹ {findBook.originalPrice}</span> <span>{Discount} % off</span></h5>
                        <div className='raitings'>{findBook.rating} <i class="fa-solid fa-star"></i></div>
                        <hr />
                        <div className="description">
                            <p> <span className='fw-bold'>Description:-</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta, vero excepturi pariatur aliquam animi voluptatibus omnis ea earum eaque suscipit eligendi quasi quisquam sequi, perspiciatis sed doloremque enim corrupti laborum. Voluptatem tempore rem dolor cumque laudantium iste ipsam et quos vitae dolore, impedit veniam sunt fugiat nobis. Ipsa, exercitationem.</p>
                        </div>
                        <div className="add-to-cart">
                            <button onClick={() => addToCart(findBook)} className='btn btn-outline-success'>Add to cart</button>
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