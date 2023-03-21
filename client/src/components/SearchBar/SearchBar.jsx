import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchByName } from "../../redux/actions.js";
import Hamburguesa from "../Hamburguesa/Hamburguesa";
import styles from "./Search.module.css";

const SearchBar = () => {
  const [pkSearch, setPkSearch] = useState("");
  const [isActive, setIsActive] = useState(true);

  const dispach = useDispatch();

  const handleChange = (e) => {
    setPkSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispach(searchByName(pkSearch));
  };

  const navigate = useNavigate();
  const handleNaviagate = () => navigate("/form");

  const handleToggleActive = () => {
    // cuando se da click lo pasa de true a false y viceversa
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <div className={styles.burguer}>
          <Hamburguesa handleClick={handleToggleActive} isActive={isActive} />
        </div>
        <div className={`${styles.search} ${isActive ? styles.active : ""}`}>
          <input type="search" onChange={handleChange} value={pkSearch} />
          <button>Search</button>
          <button onClick={handleNaviagate}>Create Pokemon</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
