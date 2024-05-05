import React from "react";
import twoChefs1 from '../images/Mario and Adrian A.jpg';
import twoChefs2 from '../images/Mario and Adrian b.jpg';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="right">
                    <img src={twoChefs2} className="img1" alt="2 chefs" />
                    <img src={twoChefs1} className="img2" alt="2 chefs" />
                </div>
            </div>
        </section>
    );
}

export default About;