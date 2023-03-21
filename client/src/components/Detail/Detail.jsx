import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";

const Detail = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/home");

  const { id } = useParams();

  const [pk, setPokemon] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/pokemon/${id}`)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <button onClick={handleNavigate}>Go back to Home Page</button>
          <div className="animate__animated animate__fadeIn">
            <div className={styles.posicion}>
              <h1>{pk.name ? pk.name.toUpperCase() : ""}</h1>
              <h1>N°: {pk.id}</h1>
            </div>
            <div className={styles.image}>
              <img src={pk.image} alt={pk.name} />
            </div>
            <div className={styles.datos}>
              <h3>Life: {pk.life}</h3>
              <h3>Attack: {pk.attack}</h3>
              <h3>Defense: {pk.defense}</h3>
              <h3>Speed: {pk.speed}</h3>
              <h3>Height: {pk.height} m</h3>
              <h3>Weight: {pk.weight} kg</h3>
              {pk.Types
                ? pk.Types.split(" ").map((type, index) => (
                    <h3 key={index} className={styles.types}>
                      Type {index + 1}:
                      <span key={index} className={styles[type]}>
                        {type}
                      </span>
                    </h3>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
