const { Country, Activity } = require('../db')

const getAllCountriesHandler = async() => {
    const countries = await Country.findAll({include: {
        model: Activity,
        attributes: ['name'], //Solo traigo el nombre de la actividad (por ahora)
        through: {
            attributes: []
        }
    }})
    return countries
}

module.exports = getAllCountriesHandler;