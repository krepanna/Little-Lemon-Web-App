import React, { useRef } from "react";
import logo from '../Logo.svg';
import hamburgerMenu from '../images/icon _hamburger menu.svg';
import { Link } from "react-router-dom";


const Nav = () => {

    return (
        <section className="navbar">
            <div className="container">
                <nav>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <div className="hidden-for-desktop"><a href=""><img src={hamburgerMenu} alt="hamburger menu icon" /></a></div>
                    <ul className="closed" id="toggledElement">
                        <li><Link to="/">Home</Link></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Nav;