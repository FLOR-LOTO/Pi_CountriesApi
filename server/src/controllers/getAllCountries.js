const getAllCountriesHandler = require("../handlers/getAllCountriesHandler.js");
const getByNameHandler = require("../handlers/getByNameHandler.js");

const getAllCountries = async (req, res) => {
  const { name } = req.query;
  
  try {
    const countries = await getAllCountriesHandler();
    if(!name) return res.status(200).json(countries)

    const country = await getByNameHandler(name);

    country ? res.status(200).json(country) : res.status(500).json(`${name} no esta en la base de datos`)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCountries;