const { Router } = require("express");


//Country
const getAllCountries = require('../controllers/getAllCountries.js');
const getCountryId = require('../controllers/getCountryId')
const getActivitiesByCountry = require('../controllers/getActivityByCountry.js')

//Activity
const getActivities = require('../controllers/getActivity.js')
const postActivities = require('../controllers/postActivities')

//users
const getUser = require('../controllers/getUser')
const postUser = require('../controllers/postUser.js');

const router = Router();

router.get('/countries', getAllCountries)
router.get('/countries/:id', getCountryId)

router.get('/countries/:id/activities', getActivitiesByCountry);
router.get('/activities', getActivities)
router.post('/activities', postActivities)

router.get('/user', getUser)
router.post('/user', postUser)





module.exports = router;