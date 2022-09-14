const express = require('express');
const router = express.Router();
const internController = require("../controller/internController");
const collegeController = require("../controller/collegeController");


router.post("/intern",internController.internCreate);
router.post('/functionup/colleges',collegeController.collegeCreate)


module.exports = router;