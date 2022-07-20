import React from 'react'
import "./styles/navbarStyles.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item slam-left"><a href="#">QubeCinema</a></li>
                <li className="nav-item">
                    <Link to="/" className="contact">Home</Link>
                </li>
                <li className="nav-item"><Link to="/favourites">Favourites</Link></li>
            </ul>
        </div>
    )
}
