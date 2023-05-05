import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchByName } from "../../redux/actions.js";
import styles from "./Search.module.css";

const SearchBar = () => {
  const [pkSearch, setPkSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPkSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchByName(pkSearch));
  };

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/form");

  useEffect(() => {
    if (pkSearch !== "") {
      const timeoutId = setTimeout(() => {
        dispatch(searchByName(pkSearch));
      }, 300);
      // Resetea el timeout si pkSearch cambia antes de que se cumpla
      return () => clearTimeout(timeoutId);
    }else{
      dispatch(searchByName(pkSearch));
    }
  }, [pkSearch, dispatch]);

  return (
    <form onSubmit={handleSearch}>
      <div className={styles.searchbar}>
        <div className={`${styles.search}`}>
          <input type="search" onChange={handleChange} value={pkSearch} />
          <div className={styles.button}>
            <button>Search</button>
            <button onClick={handleNavigate}>Create Pokemon</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
