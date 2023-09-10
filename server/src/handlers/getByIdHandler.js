const { Country, Activity } = require("../db");

const getByIdHandler = async (id) => {
    const country = await Country.findByPk(id, {include: {
        model: Activity,
        attributes: ['name'],
        through: {
            attributes: []
        }
    }})
    return country
};

module.exports = getByIdHandler;