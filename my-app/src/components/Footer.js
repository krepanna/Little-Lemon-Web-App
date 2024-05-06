import React from "react";
import logo from '../images/logoMonochrome.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo"><a href=""><img src={logo} alt="logo"></img></a></div>
                <div className="doormat-navigation">
                    <ul>
                        <li><h4>Doormat Navigation</h4></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Reservation</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <ul>
                        <li><h4>Contact</h4></li>
                        <li><a href="">Address</a></li>
                        <li><a href="">Phone Number</a></li>
                        <li><a href="">Email</a></li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><h4>Social Media Links</h4></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;