import React from "react";
import { useBook } from "../Context/BookContext";
import "../Pages css/cart.css";
export const Cart = () => {
    const { cart, setCart } = useBook();

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
    return (
        <div className="container cart-container">
            <div className="heading-cart flex">
                <div className="product">Product</div>
                <div className="price">Price</div>
                <div className="quantity">Quantity</div>
                <div className="subtotal">Subtotal</div>
            </div>
            {cart.length === 0 ? <h1 className="text-center">No Items in cart</h1> :
                <>
                    {cart.map((product) => (
                        <div kay={product._id} className="cart-book-item flex">
                            <div className="image-name-book flex">
                                <div className="book-image">
                                    <img src={product.image} width="100px" alt="" />
                                </div>
                                <div className="book-name flex">{product.name}</div>
                            </div>
                            <div className="price-book">₹ {product.price}</div>
                            <div className="quantity-book">
                                <button
                                    className="btn btn-outline-dark me-2"
                                    onClick={() => HandleAdd(product)}
                                >
                                    +
                                </button>
                                <span>{product.quantity}</span>
                                <button
                                    className="btn btn-outline-dark ms-2"
                                    onClick={() => HandleRemove(product)}
                                >
                                    -
                                </button>
                            </div>
                            <div className="subtotal-book">500</div>
                        </div>
                    ))}
                </>

            }
        </div>
    );
};
