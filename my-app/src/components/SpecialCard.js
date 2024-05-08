import React from "react";
import deliveryIcon from '../images/deliveryIcon.svg';

const SpecialCard = ({image, title, description}) => {
    return (
        <article className="special-card">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="special-card-details">
                <h3>{title} <span style={{ color: "red" }}>$10.99</span></h3>
                <p>{description}</p>

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
