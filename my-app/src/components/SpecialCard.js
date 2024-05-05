import React from "react";
import greekSalad from '../images/greekSalad.jpg';
import deliveryIcon from '../images/deliveryIcon.svg';

const SpecialCard = () => {
    return (
        <article className="special-card">
            <figure>
                <img src={greekSalad} alt="Greek Salad" />
            </figure>
            <div className="special-card-details">
                <h3>Greek Salad <span style={{ color: "red" }}>$10.99</span></h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt</p>

                <a href="" >Order a Delivery
                    <img src={deliveryIcon} style={{ position: "absolute", width: "30px", height: "30px" }} alt="Delivery Icon" />
                </a>

            </div>
        </article>
    )
}

export default SpecialCard;

// /* Vector */

// position: absolute;
// width: 30px;
// height: 30px;

// background: url(image.png);
