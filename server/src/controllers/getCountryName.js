const getByNameHandler = require('../handlers/getByNameHandler.js')

const getCountryName =  async (req, res) => {
    const {name} = req.query

    try {
        const nameID = await getByNameHandler(name)
        res.status(200).json(nameID)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
    
}

module.exports = getCountryName;