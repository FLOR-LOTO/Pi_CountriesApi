const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getByNameHandler = async (name) => {
  const country = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` || `%%${name}` } },
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return country;
};

module.exports = getByNameHandler;