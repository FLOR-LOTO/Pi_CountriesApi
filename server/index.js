const server = require("./src/server");
const { conn } = require('./src/db.js');
const { Country } = require('./src/db.js')
const PORT = 3001;


//carga de datos a la DB
const getCountry = require('./src/handlers/getCountryHandler');

conn.sync({ force: true }) //pasar a false cuando termine
  .then(async () => {
    try {
      const countriesData = await getCountry();

      for (const countryData of countriesData) {
        await Country.create({
          id: countryData.id,
          name: countryData.name,
          flags: countryData.flags,
          continents: countryData.continent,
          capital: countryData.capital,
          subregion: countryData.subregion,
          area: countryData.area,        
          population: countryData.population,
        });
      }

      server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    } catch (error) {
      console.error("Error durante la carga de datos:", error);
    }
  })
  .catch(error => console.error("Sync error:", error));





