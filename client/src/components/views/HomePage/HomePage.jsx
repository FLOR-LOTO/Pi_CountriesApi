import SearchBar from "../../SearchBar/SearchBar.jsx";
import { useEffect } from "react";
import Cards from "../../Cards/Cards.jsx";
import style from "./Home.module.css";
import { getCountries } from "../../../redux/actions/actions.js";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries(""));
  }, [dispatch]);

  const onSearch = (searchQuery) => {
    dispatch(getCountries(searchQuery));
  };

  return (
    <div className={style.container}>
      <SearchBar onSearch={onSearch} />
      <div className={style.content}>
        <Cards />
      </div>
    </div>
  );
};

export default HomePage;
