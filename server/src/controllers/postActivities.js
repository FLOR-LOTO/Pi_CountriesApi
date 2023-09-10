const postActivityHandler = require("../handlers/postActivityHandler.js");

const postActivities = async (req, res) => {
  const { id, name, difficulty, duration, season, country } = req.body;
  try {
    const activity = await postActivityHandler({
      id,
      name,
      difficulty,
      duration,
      season,
      country,
    });

    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postActivities;