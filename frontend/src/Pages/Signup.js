import React, { useState } from 'react'
import "../Pages css/signup.css"
import { useNavigate } from 'react-router-dom';
export const Signup = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", address: "", password: "", cpassword: ""
    });
    // console.log(user);


    let name, value;

    const handleInput = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }


    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, address, password, cpassword } = user;
        const res = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, address, password, cpassword
            })
        })

        console.log(res)
        const data = await res.json();
        // console.log(data.status)
        if (data.status === 422 || !data) {
            window.alert("invalid");
            console.log('invalid ')
        } else {
            window.alert("success");
            console.log('success ');
            navigate('/')
        }

    }


    return (
        <div className='container signup-container'>
            <div className="form-image-section">
                <img src="https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740856.png" alt="" />
            </div>
            <div className="form-section">
                <form method='POST'>
                    {/* for name */}
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input name='name' type="name" onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.name} />
                    </div>
                    {/* for email address */}
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name='email' type="email" onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} />

                    </div>
                    {/*  for mobile number */}
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Number</label>
                        <input name='phone' type="number" onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.phone} />
                    </div>

                    {/* for address  */}
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                        <input name='address' type="address" onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.address} />
                    </div>

                    {/*  password  */}
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name='password' type="password" onChange={handleInput} className="form-control" id="exampleInputPassword1" value={user.password} />
                    </div>

                    {/* confirm password */}
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label"> Confirm Password</label>
                        <input name='cpassword' type="password" onChange={handleInput} className="form-control" id="exampleInputPassword1" value={user.cpassword} />
                    </div>




                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    <button onClick={postData} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
