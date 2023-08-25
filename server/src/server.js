const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const {Country} = require("./db");
const { default: axios } = require("axios");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());


URL_Countries = 'http://localhost:5000/countries'

const apiCountriesData = async () => {
    try {
        const response = await axios.get(URL_Countries); // guardo en una variable la respuesta del pedido a la api
        const countriesData = response.data // pido la data de la respuesta por que es un array
        
        // itero atraves de los paises para crear una instancia del modelo Country
        for( const countryData of countriesData ) {
            const { cca3, name, flags, continents, capital, subregion, area, population } = countryData;

            const existingCountry = await Country.findOne({ where: { id: cca3 } }); //verificar si existe el pais en bd

            if (!existingCountry) { // si el pais no existe, crearlo
                await Country.create({
                    id: cca3,
                    name: name.common, // name tiene mas de uno elijo common
                    flags: flags.png, // flags tiene mas de una img, elijo .png
                    continents: continents[0],
                    capital: Array.isArray(capital) ? capital[0] : capital, // capital esta dentro de un array en la api
                    subregion: subregion,
                    area: area,
                    population: population,
                });
            }
        }
        console.log("datos cargados con exito");
    } catch (error) {
        console.error(error);
    }
};

apiCountriesData();


server.use(router);

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "path-to-your-frontend", "index.html"));
  });

module.exports = server;
