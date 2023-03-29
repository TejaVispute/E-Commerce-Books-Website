import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthenticateContext";
import { useBook } from "../Context/BookContext";


export const PlaceOrder = () => {
    const navigate = useNavigate();
    const { cart } = useBook()
    const { useData, setUserData } = useAuth();
    console.log(useData)

    // total product price calculate here
    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)



    // fetching user data


    const callAboutPage = async () => {

        try {
            const res = await fetch("http://localhost:4000/placeorder", {
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
                    <button className="btn btn-outline-success">Proceed to pay</button>
                </div>
            </div>
        </div>
    )
}
