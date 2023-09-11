import { searchPropTypes } from "../propTypes.js";
import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Llama a onSearch con el valor actual del campo de búsqueda
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
    </div>
  );
}

SearchBar.propTypes = searchPropTypes;

SearchBar.propTypes = searchPropTypes;
