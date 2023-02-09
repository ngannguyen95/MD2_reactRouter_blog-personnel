import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const styleNavLink = ({ isActive }) => ({
        background: isActive ? 'blue' : "white",
        color: isActive ? 'white' : "black"
    })
    return (
        <div>
            <ul className="nav justify-content-end my-5">
                <li className="nav-item">
                    <NavLink className="nav-link active" to={'/'} style={styleNavLink}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to={'/about'} style={styleNavLink}>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to={'/user'} style={styleNavLink}>
                        User
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to={'/contact'} style={styleNavLink}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
