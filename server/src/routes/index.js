const { Router } = require("express");

const router = Router();

const getAllCountries = require("../controllers/getAllCountries");
const getCountryDetail = require("../controllers/getCountryDetail");
const getCountryByName = require("../controllers/searchCountryByName");
const postCreateActivity = require("../controllers/postCreateActivity");
const getActivities = require("../controllers/getActivities") 

router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountryDetail);
router.get("/countries/name", getCountryByName);
router.post("/activities", postCreateActivity);
router.get("/activities", getActivities);

module.exports = router;
