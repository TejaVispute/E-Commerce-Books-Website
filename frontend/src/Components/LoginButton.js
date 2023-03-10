import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
// This is login button component
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <li style={{ cursor: "pointer" }} className="dropdown-item" onClick={() => loginWithRedirect()}>Login</li>
    )
}

export default LoginButton;