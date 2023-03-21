import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import logo from "../../img/logoPokemon.png";
import "animate.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/home");

  return (
    <div className={styles.container}>
      <div className="animate__animated animate__zoomInDown">
        <div>
          <img src={logo} alt="Logo" />
          <h1>Welcome Adventurers..!</h1>
          <button onClick={handleNavigate}>Let's Go!!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
