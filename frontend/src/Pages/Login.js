import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Pages css/login.css'
const Login = () => {


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
        } else {
            window.alert("login successful")
            naviagate("/")
        }

    }

    return (
        <div className='container login-form-wrapper'>
            <div className="left-login-image-container">
                <img src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-man-signing-login-to-account-huge-smartphone-user-interface-secure-password-194944752.jpg" alt="" />
            </div>
            <div className="right-form-wrapper">
                <form method='POST'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name='password' class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={loginUser} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login