import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="home-text">
        Add adventure to your life by joining the #vanlife movement, Rent the
        perfect vant to make your perfect road trip.
      </p>
      <button className="home-btn">
        <Link to="/vans">Find your van</Link>
      </button>
    </div>
  );
}

export default Home;
