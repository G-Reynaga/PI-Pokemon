import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import logo from "../../img/logoPokemon.png";
import pikachu from "../../img/Pikachu.png";
import "animate.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/home");

  return (
    <div className={styles.container}>
      <div className="animate__animated animate__fadeIn">
        <div className={styles.landing}>
          <img src={pikachu} alt="Pikachu" />
          <div className={styles.introLanding}>
            <img src={logo} alt="Logo" />
            <h1>Welcome Adventurers..!</h1>
            <button onClick={handleNavigate}>Let's Go!!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
