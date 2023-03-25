import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css";
import {
  getPks,
  filterBySource,
  filterByType,
  orderBy,
} from "../../redux/actions.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPks());
  }, [dispatch]);

  const handleChange = (e) => {
    e.target.name === "orderBy" && dispatch(orderBy(e.target.value));

    e.target.name === "filterBySource" &&
      dispatch(filterBySource(e.target.value));

    e.target.name === "filterByType" && dispatch(filterByType(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <div>
          <select name="orderBy" defaultValue="default" onChange={handleChange}>
            <option value="default" disabled>
              ORDER BY
            </option>
            <option value="A - Z">A - Z</option>
            <option value="Z - A">Z - A</option>
            <option value="Higher Attack">HIGHER ATTACK</option>
            <option value="Lower Attack">LOWER ATTACK</option>
            <option value="Higher Life">HIGHER LIFE</option>
            <option value="Lower Life">LOWER LIFE</option>
            <option value="Higher Defense">HIGHER DEFENSE</option>
            <option value="Lower Defense">LOWER DEFENSE</option>
          </select>
        </div>
        <div>
          <select
            name="filterBySource"
            defaultValue="default"
            onChange={handleChange}
          >
            <option value="default" disabled>
              FILTER BY SOURCE
            </option>
            <option value="Reset">RESET</option>
            <option value="Api">API</option>
            <option value="Db">DB</option>
          </select>
        </div>
        <div>
          <select
            name="filterByType"
            defaultValue="default"
            onChange={handleChange}
          >
            <option value="default" disabled>
              FILTER BY TYPE
            </option>
            <option value="normal">NORMAL</option>
            <option value="grass">GRASS</option>
            <option value="fire">FIRE</option>
            <option value="water">WATER</option>
            <option value="flying">FLYING</option>
            <option value="rock">ROCK</option>
            <option value="bug">BUG</option>
            <option value="ground">GROUND</option>
            <option value="fighting">FIGHTING</option>
            <option value="electric">ELECTRIC</option>
            <option value="poison">POISON</option>
            <option value="ghost">GHOST</option>
            <option value="ice">ICE</option>
            <option value="steel">STELL</option>
            <option value="dark">DARK</option>
            <option value="psychic">PSYCHIC</option>
            <option value="dragon">DRAGON</option>
            <option value="fairy">FAIRY</option>
            <option value="shadow">SHADOW</option>
            <option value="unknown">UNKNOWN</option>
          </select>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Home;
