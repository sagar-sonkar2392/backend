const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const bookassi =require("../controllers/booksassis")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)


router.post("/createBooks", bookassi.createBooks)

router.post("/booklist", bookassi.booklist)

router.post("/getBooksInYear", bookassi.getBooksInYear)

router.post("/getXINRBook", bookassi.getXINRBook)

router.post("/getRandomBooks", bookassi.getRandomBooks)

router.post("/getParticular", bookassi.getParticular)

module.exports = router;