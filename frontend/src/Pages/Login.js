import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Pages css/login.css'
import { useAuth } from '../Context/AuthenticateContext';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    let { isLoggedIn, setIsLoggedIn } = useAuth();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const loginUser = async (e) => {
        e.preventDefault();
        // console.log("loginuser")
        try {
            setLoading(true);
            const res = await fetch('http://localhost:4000/signin', {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            if (!res.ok) {
                const errorMessage = await res.text();
                throw new Error(errorMessage || "Invalid credentials");
            }
            setLoading(false);
            window.alert("Login successful");
            setIsLoggedIn(true)
            navigate("/"); // Assuming "navigate" is a function that handles navigation

        } catch (error) {
            setLoading(false);
            window.alert(error.message);
            setIsLoggedIn(false);
        }
    };

    if (loading) {
        return <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
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
                    <button onClick={loginUser} type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            {/* <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" /> */}
        </div>
    )
}

export default Login