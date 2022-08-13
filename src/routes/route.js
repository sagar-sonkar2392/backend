const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const UserController= require("../controllers/userController")
const books =require ("../bookscollection/books")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createbookName", UserController.createbookName)

router.get("/getbooksList", UserController.getbooksList)

module.exports = router;