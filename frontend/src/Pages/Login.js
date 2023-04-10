import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Pages css/login.css'
import { useAuth } from '../Context/AuthenticateContext';

const Login = () => {
    let { isLoggedIn, setIsLoggedIn } = useAuth();
    // console.log(isLoggedIn)

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const naviagate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:4000/signin', {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })

        })
        console.log(res);


        if (res.status === 400 || !res) {
            window.alert("invlid credentials")
            setIsLoggedIn(false)
        } else {

            window.alert("login successful")
            naviagate("/")
            setIsLoggedIn(true)
        }

    }

    return (
        <div className='container login-form-wrapper'>
            <div className="left-login-image-container">
                <img src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-man-signing-login-to-account-huge-smartphone-user-interface-secure-password-194944752.jpg" alt="" />
            </div>
            <div className="right-form-wrapper">
                <form method='POST'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={loginUser} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login