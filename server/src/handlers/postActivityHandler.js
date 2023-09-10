const { Activity, Country } = require("../db");


  const postActivityHandler = async ({ id, name, difficulty, duration, season, country }) => {
    try {
      const activity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season,
        country
      });
  
      const countryObj = await Country.findOne({
        where: { name: country },
      });
  
      if (countryObj) {
        await activity.addCountry(countryObj);
      }
  
      console.log('Activity created:', activity.toJSON()); // Agrega este registro
      return activity;
    } catch (error) {
      console.error('Error creating activity:', error);
      throw error;
    }
  };
 


module.exports = postActivityHandler;