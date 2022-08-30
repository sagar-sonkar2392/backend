const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const  {jwtvalidation,checkIfAuthourized}= require("../middlewares/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",jwtvalidation,checkIfAuthourized, userController.getUserData)        // jwtMW.jwtvalidation,

router.put("/users/:userId",  jwtvalidation,checkIfAuthourized, userController.updateUser)          // jwtMW.jwtvalidation,

router.delete("/users/:userId", jwtvalidation,checkIfAuthourized, userController.deleteUser)     // jwtMW.jwtvalidation

module.exports = router;