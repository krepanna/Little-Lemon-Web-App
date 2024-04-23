import React from "react";
import logo from '../Logo.svg';

const Footer = () => {
    return (
        <footer>
        <ul>
            <li><a href=""><img src={logo} alt="logo"></img></a></li>
            <li>
                <ul>
                    <li><a href="">Doormat Navigation</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Reservation</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>Contact</li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><a href="">Social Media Links</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
            </li>
        </ul>
        </footer>
    );
}

export default Footer;