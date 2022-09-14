const express = require('express');
const router = express.Router();
const intern =require("../controllers/internController")


router.post("/functionup/interns", intern.interns)

module.exports = router;