import { useState } from "react";
import Card from "../Card/Card.jsx";
import { cardsPropTypes } from "../propTypes.js";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

export default function Cards() {
  const countries = useSelector((state) => state.countriesFilter);
  const cardsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = countries.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(countries.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.cardsContainer}>
      {currentCards.map(
        ({
          id,
          name,
          continents,
          capital,
          subregion,
          area,
          population,
          flags,
          onClose,
        }) => (
          <Card
            key={id}
            id={id}
            name={name}
            continents={continents}
            capital={capital}
            subregion={subregion}
            area={area}
            population={population}
            flags={flags}
            onClose={onClose}
          />
        )
      )}
      <div className={`${style.paginationContainer}`}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={style.btn}
          >
           ◄ ◄ 
          </button>
        <span className={style.span}>Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={style.btn}
        >
         ► ► 
        </button>
      </div>
    </div>
  );
}

Cards.propTypes = cardsPropTypes;
