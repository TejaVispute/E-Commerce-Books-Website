import React from 'react'
import { Link } from "react-router-dom";
function Error() {


    return (
        <div>
            <div style={{ width: "100%", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column" }}>
                <img style={{ width: "30%" }} src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
                <div className='text-center'>
                    <Link className='btn btn-warning text-white' to='/'>Go to Home</Link>
                </div>
            </div>

        </div>
    )
}

export default Error