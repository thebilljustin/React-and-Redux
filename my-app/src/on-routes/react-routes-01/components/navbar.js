import React from 'react'

const Navbar = _ => {
    return (
        <nav className="nav-wrapper purple darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar