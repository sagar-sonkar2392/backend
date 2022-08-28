const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const jwtMW= require("../middlewares/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)        // jwtMW.jwtvalidation,

router.put("/users/:userId",  jwtMW.jwtvalidation, userController.updateUser)          // jwtMW.jwtvalidation,

router.delete("/users/:userId", jwtMW.jwtvalidation, userController.deleteUser)     // jwtMW.jwtvalidation

module.exports = router;