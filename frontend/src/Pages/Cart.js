import React, { useEffect, useState } from "react";
import { useBook } from "../Context/BookContext";
import "../Pages css/cart.css";
import CartIsEmpty from "../Components/CartIsEmpty";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthenticateContext";



export const Cart = () => {
    const { cart, setCart } = useBook();
    // console.log(cart)

    const { useData, setUserData } = useAuth();
    console.log(useData);
    const navigate = useNavigate();
    // for increment cart quantity

    const HandleAdd = (product) => {
        const ProdductExists = cart.find((item) => item._id === product._id);

        if (ProdductExists) {
            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? { ...ProdductExists, quantity: ProdductExists.quantity + 1 }
                        : item
                )
            );
        } else {

            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // for decrement and remove from cart

    const HandleRemove = (product) => {
        const ProductExists = cart.find((item) => item._id === product._id);
        if (ProductExists.quantity === 1) {
            setCart(cart.filter((item) => item._id !== product._id));
        } else {
            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? { ...ProductExists, quantity: ProductExists.quantity - 1 }
                        : item
                )
            );
        }
    };

    // total price of cart

    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)



    const callAboutPage = async () => {

        try {
            const res = await fetch("http://localhost:4000/cart", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            console.log(res);
            const data = await res.json();
            setUserData(data)

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

        } catch (error) {
            console.log(error)
            // window.alert("please login first")
            navigate("/login")

        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])


    function buyProduct(valu) {
        // console.log(valu)
        navigate('/placeorder')
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart])



    return (
        <>
            <div className="container cart-container">

                {cart.length === 0 ? <CartIsEmpty /> :
                    <div style={{ overflowY: "scroll" }}>
                        <div className="heading-cart flex">
                            <div className="product">Product</div>
                            <div className="price">Price</div>
                            <div className="quantity">Quantity</div>
                            <div className="subtotal">Subtotal</div>
                        </div>
                        {cart.map((product) => (
                            <div kay={product._id} className="cart-book-item flex">
                                <div className="image-name-book flex">
                                    <div className="book-image">
                                        <img src={product.image} width="100px" height={"70px"} alt="" />
                                    </div>
                                    <div className="book-name flex">{product.name}</div>
                                </div>
                                <div className="price-book">₹ {product.price}</div>

                                {/* increment and decrement quantity of products  */}
                                <div className="quantity-book">
                                    <button
                                        className="btn btn-outline-success me-2 rounded-circle"
                                        onClick={() => HandleAdd(product)}
                                    >
                                        +
                                    </button>
                                    <span>{product.quantity}</span>
                                    <button
                                        className="btn btn-outline-danger ms-2 rounded-circle"
                                        onClick={() => HandleRemove(product)}
                                    >
                                        -
                                    </button>
                                </div>
                                <div className="subtotal-book">₹ {product.price * product.quantity}</div>

                            </div>
                        ))}
                    </div>

                }


                <div className="flex  justify-content-end p-4">
                    {/*subtotal of all cart items  */}
                    {cart.length === 0 ? null : <div className="cart-items-total fw-bold">
                        <div>
                            Total Price <div className="total-items-total-price ">₹ {totalPrice}</div>
                            <button className="btn btn-outline-success" onClick={() => buyProduct(cart)}>buy</button>
                        </div>
                    </div>}
                </div>
            </div>

            {/* {!user && <h1>Please Login First</h1>} */}
        </>
    );
};
