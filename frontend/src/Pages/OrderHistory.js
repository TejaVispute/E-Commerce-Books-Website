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
        <div className='table-responsive'>

            <div className="container  py-5">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Price</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prevHistory.map((orderhistoryinfo, index) => (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{orderhistoryinfo._id}</td>
                                    <td>{orderhistoryinfo.price} /-</td>
                                    <td>{orderhistoryinfo.name}</td>
                                    <td>{orderhistoryinfo.quantity}</td>
                                    <td>pending</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default OrderHistory