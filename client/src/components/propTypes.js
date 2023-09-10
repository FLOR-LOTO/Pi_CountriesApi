import PropTypes from "prop-types";

export const cardPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  continents: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  flags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export const cardsPropTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      continents: PropTypes.string.isRequired,
      capital: PropTypes.string.isRequired,
      subregion: PropTypes.string.isRequired,
      area: PropTypes.number.isRequired,
      population: PropTypes.number.isRequired,
      flags: PropTypes.string.isRequired,
      onClose: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export const searchPropTypes = {
  onSearch: PropTypes.func.isRequired,
};
