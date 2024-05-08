import React from "react";
import starIcon from '../images/starIcon.svg';

const TestimonyCard = ({name, feedback, photo}) => {

    const star = <img src={starIcon} style={{ width: "30px", height: "30px" }} alt="Star Icon" />

    return (
        <article className="testimony-card">
            <figure className="circle">
                <img className="customer-photo" src={photo} alt="Customer {name} "/>
            </figure>
            <div className="testimony-card-details">
                <h3>{name}</h3>
                <p>{feedback}</p>
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