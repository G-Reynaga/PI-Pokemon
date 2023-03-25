import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Hamburguesa from "../Hamburguesa/Hamburguesa";
import logo from "../../img/logoPokemon.png";
import style from "./NavBar.module.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggleActive = () => {
    // cuando se da click lo pasa de true a false y viceversa
    setIsActive((prevIsActive) => !prevIsActive);
  };
  return (
    <div>
      <div className={style.navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div>
          <div className={style.burguer}>
            <Hamburguesa handleClick={handleToggleActive} isActive={isActive} />
          </div>
          <div className={`${style.links} ${isActive ? style.active : ""}`}>
            <Link className={style.link} to="/about">
              ABOUT
            </Link>
            <div className={style.search}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
