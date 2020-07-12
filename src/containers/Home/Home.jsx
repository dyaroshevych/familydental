import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import Button from "../../components/Button/Button";

const Home = () => (
  <div className="Home">
    <div className="Home_textContainer">
      <span className="Home_heading">
        <h1>family dental</h1>
      </span>
      <h2>We understand what’s it’s like to go through a dental operation.</h2>
      <Link to="/appointment">
        <Button size="lg" color="white">
          Set appointment
        </Button>
      </Link>
    </div>
  </div>
);

export default Home;
