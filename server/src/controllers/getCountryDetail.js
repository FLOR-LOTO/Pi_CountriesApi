const { Country, Activity } = require("../db");

const getCountryDetail = async (req, res) => {
    const idPais = req.params.id;

    try {
        const detail = await Country.findByPk(idPais, {
            include: Activity,
        });

        if (detail) {
            res.status(200).json(detail);
        } else {
            res.status(404).json({ error: "Country not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCountryDetail;
