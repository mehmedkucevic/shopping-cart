import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-title">
          Fresh Food<br></br> & Grocery Shopping{" "}
        </h1>
        <p className="smaller-text">
          <a className="products" href="/products">
            Check our products
          </a>
        </p>
      </div>
    </div>
  );
}