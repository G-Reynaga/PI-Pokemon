import { useNavigate } from "react-router-dom";
import e404 from "../../img/Error.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");

  return (
    <div className="animate__animated animate__bounceIn">
    <div className={styles.container}>
      <div className={styles.error}>
        <h1>404</h1>
        <img src={e404} alt="Error" />
        <h3>Sorry! the page you're looking for is not here</h3>
        <button onClick={handleNavigate}>Click here to return</button>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
