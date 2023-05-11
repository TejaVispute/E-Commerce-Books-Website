import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimationLoader } from '../Components/AnimationLoader';
import { useAuth } from '../Context/AuthenticateContext';

export const Logout = () => {

    let { setIsLoggedIn } = useAuth();


    let navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:4000/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            setIsLoggedIn(false)

            setTimeout(() => {
                navigate('/')
            }, 1000)

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error) => console.log(error))
    })

    return (
        <>
            <div style={{ height: "75vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <img width={50} src="https://uploads.toptal.io/blog/image/122376/toptal-blog-image-1489080120310-07bfc2c0ba7cd0aee3b6ba77f101f493.gif" alt="" />
                </div>
            </div>
        </>
    )
}
