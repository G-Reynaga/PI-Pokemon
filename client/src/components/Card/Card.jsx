import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ name, image, types, id }) => {
  return (
    <div key={id} className={`animate__animated animate__fadeIn `}>
      <div className={styles.card}>
        <h1>{name}</h1>
        <Link to={`/detail/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <div className={styles.types}>
          {types.map((type, index) => (
            <span key={index} className={styles[type]}>
              {type}
              </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
