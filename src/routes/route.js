const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController=require("../controllers/weather Controller")
const memesController=require("../controllers/mems controller")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getByDistrict",CowinController.getByDisrict )

router.get("/weather",WeatherController.weather)

router.get("/temp",WeatherController.temp)

router.get("/sorted/cities",WeatherController.getCityTemp)

router.get("/memes",memesController.memes)

router.post("/getmemes",memesController.memesHandler)

module.exports = router;