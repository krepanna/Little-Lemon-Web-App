import React from "react";
import SpecialCard from "./SpecialCard";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="container">
        <div className="top">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className="bottom">
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
        </div>
      </div>
    </section>
  )
}

export default Highlights;