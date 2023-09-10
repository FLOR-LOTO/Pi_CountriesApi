const getActivity = require('../handlers/getActivityHandler.js')

const getAllActivities = async(req, res) => {
    try {
        const activities = await getActivity()
        res.status(200).json(activities)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
};

module.exports = getAllActivities;