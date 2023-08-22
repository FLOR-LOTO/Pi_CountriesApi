const postCreateActivityHandler = require ("../handlers/postCreateActivity");


const addActivity = async (req, res) => {
    const { name, difficulty, duration, season } = req.body;
    const { id } = req.query;

    try {
        if (!name || !difficulty || !duration || !season || !id) {
            throw new Error("Missing required properties");
        }

        const newActivity = await postCreateActivityHandler(
            { name, difficulty, duration, season },
            id
        );

        res.status(201).json(newActivity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = addActivity;
