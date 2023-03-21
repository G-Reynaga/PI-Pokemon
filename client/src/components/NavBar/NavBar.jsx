import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/logoPokemon.png";
import style from "./NavBar.module.css";

const NaBar = () => {
  return (
    <div>
      <div className={style.navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default NaBar;
