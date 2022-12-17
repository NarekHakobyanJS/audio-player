import React from 'react'
import { loginEndpoint } from '../../spotify'
import "./login.css"
function Login() {
    return (
        <div className='login-page'>
            <img
                className='logo'
                src="https://i.scdn.co/image/ab67616d0000b2739ae9bebe384f50ce4e5695c7" />
            <a href={loginEndpoint}><div className='login-btn'>Log In</div></a>
        </div>
    )
}

export default Login