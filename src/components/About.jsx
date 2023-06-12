import React from "react";
import night from "../assets/night-van.png";
import "../styles/about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div className="about-img"></div>
      <div className="about-content">
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go ff without a hitch.(Hich costs extra)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-footer">
        <p>
          Your destination is waiting.
          <br />
          Your van is ready.
        </p>
        <Link to="/vans" className="about-explore">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}

export default About;
