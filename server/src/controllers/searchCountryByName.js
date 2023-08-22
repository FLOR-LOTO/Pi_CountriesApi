const searchCountryByNameHandler = require ("../handlers/searchCountryByName")

const getCountryByName = async (req, res) => {
    const {name} = req.query;

    try {
        const countries = await searchCountryByNameHandler(name);
            res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCountryByName;