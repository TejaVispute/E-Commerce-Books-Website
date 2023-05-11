import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBook } from '../Context/BookContext';
import '../Pages css/bookdetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BookDetails() {
    const { data, cart, setCart } = useBook();

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


    // adding cart items in local storage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart])

    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    useEffect(() => {
        goTop();
    });

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
                        <div className="offers-wrapper">
                            <div className='p-2'>    <i class="fa-solid fa-tag text-success "></i> <span className='mx-2'>Bookerz Pay Later</span></div>

                            <div className='p-2'>    <i class="fa-solid fa-tag text-success "></i> <span className='mx-2'><span className='fw-bold'>Bank Offer</span> 10% Off up to ₹750 on SBI Credit/Debit Card transaction.T&C</span></div>

                            <div className='p-2'>    <i class="fa-solid fa-tag text-success "></i> <span className='mx-2 text-justify'><span className='fw-bold'>Bank Offer</span> 10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and aboveT&C</span></div>
                            <div className='p-2'>    <i class="fa-solid fa-tag text-success "></i> <span className='mx-2 text-justify'><span className='fw-bold'>Bank Offer</span> 10% off on AU Bank Credit Card Transactions, up to ₹1,000. On orders of ₹10,000 and aboveT&C</span></div>
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

export default BookDetails;