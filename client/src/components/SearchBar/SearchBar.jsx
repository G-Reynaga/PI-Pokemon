import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchByName } from "../../redux/actions.js";
import styles from "./Search.module.css";

const SearchBar = () => {
  const [pkSearch, setPkSearch] = useState("");

  const dispach = useDispatch();

  const handleChange = (e) => {
    setPkSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispach(searchByName(pkSearch));
  };

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/form");

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
