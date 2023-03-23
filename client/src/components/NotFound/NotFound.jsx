import { useNavigate } from "react-router-dom";
import e404 from "../../img/psyduck.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <h1>404</h1>
        <p>Sorry! the page you're looking for is not here</p>
        <img src={e404} alt="Error" />
        <button onClick={handleNavigate}>Click here to return</button>
      </div>
    </div>
  );
};

export default NotFound;
