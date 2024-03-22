import React from 'react'
import './Nav.css'

const Nav = () => {
    return <>
        <nav>
            <div id="navleft">
                {/* <img src="" alt="" /> */}
                <a href="/">Logo</a>
            </div>
            <div id="navcenter">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">blog</a>
                <a href="/">Services</a>
                <a href="/">contact us</a>
            </div>
            <div id="navright">
                <a href="/">Get Quote</a>
            </div>
        </nav>
    </>
}

export default Nav