import React, { useEffect } from "react";
import { useBook } from "../Context/BookContext";
import "../Pages css/cart.css";
import { useAuth0 } from "@auth0/auth0-react";
import CartIsEmpty from "../Components/CartIsEmpty";
export const Cart = () => {
    const { cart, setCart } = useBook();
    const { user } = useAuth0();
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



    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // })
    return (
        <>
            {user && <div className="container cart-container">

                {cart.length === 0 ? <CartIsEmpty /> :
                    <>
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
                                        <img src={product.image} width="100px" alt="" />
                                    </div>
                                    <div className="book-name flex">{product.name}</div>
                                </div>
                                <div className="price-book">₹ {product.price}</div>

                                {/* increment and decrement quantity of products  */}
                                <div className="quantity-book">
                                    <button
                                        className="btn btn-outline-success me-2"
                                        onClick={() => HandleAdd(product)}
                                    >
                                        +
                                    </button>
                                    <span>{product.quantity}</span>
                                    <button
                                        className="btn btn-outline-danger ms-2"
                                        onClick={() => HandleRemove(product)}
                                    >
                                        -
                                    </button>
                                </div>
                                <div className="subtotal-book">₹ {product.price * product.quantity}</div>
                            </div>
                        ))}
                    </>

                }


                {/*subtotal of all cart items  */}
                {cart.length === 0 ? null : <div className="cart-items-total">
                    <div>
                        Total Price <div className="total-items-total-price">{totalPrice}</div>
                    </div>
                </div>}
            </div>}

            {!user && <h1>Please Login First</h1>}
        </>
    );
};
