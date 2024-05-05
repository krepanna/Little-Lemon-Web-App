import React from "react";
import TestimonyCard from "./TestimonyCard";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimony-card-container">
          <TestimonyCard />
          <TestimonyCard />
          <TestimonyCard />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;