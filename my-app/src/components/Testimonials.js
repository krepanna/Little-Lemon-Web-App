import React from "react";
import TestimonyCard from "./TestimonyCard";

const reviews = [
  {
    person: "Yolanda",
    feedback: "Great food and atmosphere!",
    getPhotoSrc: () => require("../images/person1.png"),
  },
  {
    person: "Pete",
    feedback: "Cool place to meet  with friends",
    getPhotoSrc: () => require("../images/person2.png"),
  },
  {
    person: "Rick",
    feedback: "Their lemon dessert is a must taste!",
    getPhotoSrc: () => require("../images/person3.png"),
  },
  {
    person: "Brandy",
    feedback: "Excellent customer service!",
    getPhotoSrc: () => require("../images/person4.png"),
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimony-card-container">
        {reviews.map((review) => (
          <TestimonyCard
            key={review.person}
            name={review.person}
            feedback={review.feedback}
            photo={review.getPhotoSrc()}
          />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;