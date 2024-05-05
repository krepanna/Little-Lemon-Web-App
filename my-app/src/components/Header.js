import React from "react";
import photo1 from '../images/photo1.jpg'

const Header = () => {
  return (
    <header>
      <div className="container grid">
        <div className="left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a Mediterranean restaurant with a passion for traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>
        <div className="right">
          <img src={photo1} style={{ borderRadius: '8px' }} alt="restaurant food"></img>
        </div>
      </div>
    </header>
  );
}

export default Header;