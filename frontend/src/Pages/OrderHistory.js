import React, { useEffect, useState } from 'react'

const OrderHistory = () => {
    const [prevHistory, setprevHistory] = useState([])

    const getUserHistory = async () => {

        try {
            const res = await fetch("http://localhost:4000/orderHistory", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data.orderHistory.items);
            setprevHistory(data.orderHistory.items)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserHistory();
    }, [])
    return (
        <div>
            {
                prevHistory.map((e) => (

                    <>
                        <div>{e.name}</div>
                        <div>{e.quantity}</div>
                        <img src={e.image} alt="" />
                    </>
                ))
            }
        </div>
    )
}

export default OrderHistory