import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthenticateContext";
import { useBook } from "../Context/BookContext";
import axios from "axios"

// show Razorpay



export const PlaceOrder = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useBook()
    const { useData, setUserData } = useAuth();
    let userEmail = useData.email;


    // total product price calculate here
    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)



    // fetching user data


    const callAboutPage = async () => {

        try {
            const res = await fetch("http://localhost:4000/placeorderres", {
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
            navigate("/")
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    function loadRazorpay(value) {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = value
            document.body.appendChild(script)
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })

    }


    async function displayRazorpay() {

        const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay filed to load");
            return
        }


        const data = await fetch("http://localhost:4000/razorpay", { method: "POST" }).then((e) => e.json());
        console.log(data, "hello");

        var options = {
            "key": "rzp_test_uD8A6e2bMoZRiA", // Enter the Key ID generated from the Dashboard
            "amount": (totalPrice * 100).toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": data.currency,
            "orderId": data.id,
            "name": "E-Commercy By Tejas", //your business name
            "description": "Thanks for shopping online",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Books_Flat_Icon_Vector.svg/1226px-Books_Flat_Icon_Vector.svg.png",
            "handler": async function (response) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                // console.log(response, "Razorpay Reaponse");
                await axios.post("http://localhost:4000/placeorder", { cart, userEmail, response, totalPrice })
                setCart([]);
                localStorage.removeItem("cart");
                navigate("/previusorders")
                console.log(res);
            },

            "prefill": {
                "name": useData.name, //your customer's name
                "email": useData.email,
                "contact": useData.phone
            },

        };
        var paymentObj = new window.Razorpay(options);
        paymentObj.open();

    }




    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <h5>{useData.name}</h5>
                        <h5>{useData.email}</h5>
                        <h5>{useData.address}</h5>

                    </div>

                    <div className="row">
                        {cart.map((e) => (
                            <div>{e.name}</div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">Total Price:{totalPrice}</div>
                    <button onClick={displayRazorpay} className="btn btn-outline-success">Proceed to pay</button>
                </div>
            </div>
        </div>
    )
}
