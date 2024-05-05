import React from "react";
import logo from '../Logo.svg';
import hamburgerMenu from '../images/icon _hamburger menu.svg';

const Nav = () => {
    

    return (
        <section className="navbar">
            <div className="container">
                <nav>
                    <div className="hidden-for-desktop"><a href=""><img src={hamburgerMenu} alt="hamburger menu icon" /></a></div>
                    <ul>
                        <li><a href=""><img src={logo} alt="logo"></img></a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Nav;