import React from "react";
import cat from "./images/cat.png";
import animals from  "./images/animals.png"
import dog from "./images/dog.png"
import "./Home.css"
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="home_container">
        <Link to="/Dog">
      <button className="btn" id="dog">
        <img src={dog} alt="cat" />
      </button>
      </Link>
      <Link to="/WildAnimals">
      <button className="btn" id="animals">
        <img src={animals} alt="animals" />
      </button>
      </Link>
      <Link to="/Cat">
      <button className="btn" id="cat">
        <img src={cat} alt="dog" />
      </button>
      </Link>
    </div>
  );
}

export default Home;
