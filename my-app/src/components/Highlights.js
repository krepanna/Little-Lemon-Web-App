import React from "react";
import SpecialCard from "./SpecialCard";

const specials = [
  {
    title: "Greek Salad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    getImageSrc: () => require("../images/dish1.png"),
  },
  {
    title: "Bruschetta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    getImageSrc: () => require("../images/dish2.png"),
  },
  {
    title: "Lemon Dessert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    getImageSrc: () => require("../images/dish3.png"),
  },
]

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="container">
        <div className="top">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className="bottom">
          {specials.map((special) => (
            <SpecialCard
              key={special.title}
              title={special.title}
              description={special.description}
              image={special.getImageSrc()}
              />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights;