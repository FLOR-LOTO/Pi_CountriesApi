const { Activity , Country} = require("../db");

const getActivity = async () => {
  const act = await Activity.findAll({include: {
        model: Country,
        attributes: ['name'],
        through: {
            attributes: []
        }
    }});
  return act;
};

module.exports = getActivity;