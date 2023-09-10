import { searchPropTypes } from "../propTypes.js";
import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="search"
        placeholder="Buscar país..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className={style.btn} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}

SearchBar.propTypes = searchPropTypes;
