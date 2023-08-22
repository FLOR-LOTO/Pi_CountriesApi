const { Activity } = require("../db");
const Country = require("../models/Country");

module.exports = async (activity, id) => {
try {
    const upperCaseid = id.toUpperCase();
    
    const newActivity = await Activity.create(activity);
    newActivity.addCountry([upperCaseid]);
    
    const postCreateActivity = await Activity.findOne({
        where: { id: newActivity.id },
        include:[
            {
                model: Country,
                attributes:[
                    "id",
                    "name",
                    "flags",
                    "continents",
                    "capital",
                    "subregion",
                    "area",
                    "population"
                ],
                through: {
                    attributes: [],
                }       
            }
        ]
    })
    return postCreateActivity;
    
} catch (error) {
    console.log(error);
}
};