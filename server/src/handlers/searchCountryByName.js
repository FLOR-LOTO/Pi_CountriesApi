const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const searchCountryByNameHandler = async (name) => {
    const includeArray= [
        {
            model: Activity,
            attributes: ["id", "name", "difficulty", "season"],
            throw: {
                attributes: [],
            },
        },
    ];

    if(!name) return await Country.findAll({
        include: includeArray,
    });

    return await Country.findAll({
        where: {
            name: {
                [Op.ilike]:`%${name}%`,
            },
        },
        include: includeArray,
    });
};

module.exports = searchCountryByNameHandler;