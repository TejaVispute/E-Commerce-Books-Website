import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <li style={{ border: 0, cursor: "pointer" }} className="dropdown-item" onClick={() => logout()}>Logout</li>
    )
}

export default LogoutButton