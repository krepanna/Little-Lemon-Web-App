import React from "react";
import Yolanda from '../images/Yolanda.png';
import starIcon from '../images/starIcon.svg';

const TestimonyCard = () => {

    const star = <img src={starIcon} style={{ width: "30px", height: "30px" }} alt="Star Icon" />

    return (
        <article className="testimony-card">
            <figure className="circle">
                <img className="customer-photo" src={Yolanda} alt="Customer Yolanda" />
            </figure>
            <div className="testimony-card-details">
                <h3>Yolanda</h3>
                <p> Gread food and atmosphere!</p>
                <div className="testimony-rating">
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}
                </div>
            </div>
        </article>
    )
}

export default TestimonyCard;