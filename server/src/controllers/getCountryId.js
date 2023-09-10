const getByIdHandler = require("../handlers/getByIdHandler.js");

const getCountryid = async (req, res) => {
  const { id } = req.params;
  const idUpp = id.toUpperCase()
try {
    countryById = await getByIdHandler(idUpp)
    res.status(200).json(countryById)
} catch (error) {
    res.status(500).json({error: error.message})
    
}
};

module.exports = getCountryid;