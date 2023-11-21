import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import "../pages/Menu"
import Login from "./Login";
import Signup from "./Signup";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
      <Login/>
      <Signup/>
    </div>
  );
  
}

export default Home;
