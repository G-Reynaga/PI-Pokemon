import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./Cards.module.css";
import pokeball from "../../img/pokeball.png";
import prev from "../../img/arrow_navigation_icon_left.png";
import next from "../../img/arrow_navigation_icon_right.png";

const Cards = () => {
  const pks = useSelector((state) => state.pkToOrder);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(14);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pks.slice(indexOfFirstItem, indexOfLastItem);

  const pages = Math.ceil(pks.length / itemsPerPage);

  const handlePageCurrent = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(
        <button
          className={`${styles.pages} ${
            currentPage === i ? styles.active : ""
          }`}
          key={i}
          id={i}
          onClick={handlePageCurrent}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div className={styles.container}>
        {!pks.length && (
          <div className={styles.noFound}>
            <img src={pokeball} alt="No Results Found" />
            <h2>No Results Found.</h2>
          </div>
        )}
        {currentItems.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name ? pokemon.name.toUpperCase() : ""}
            image={pokemon.image}
            types={pokemon.Types ? pokemon.Types.split(" ") : []}
          />
        ))}
      </div>
      <ul className={styles.lista}>
        <button className={styles.arrow} onClick={handlePrevClick}>
          <img src={prev} alt="prev" />
        </button>
        {renderPageNumbers()}
        <button className={styles.arrow} onClick={handleNextClick}>
          <img src={next} alt="next" />
        </button>
      </ul>
    </div>
  );
};

export default Cards;
