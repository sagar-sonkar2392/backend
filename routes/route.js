const express = require('express');
const router = express.Router();

const AuthorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")

const authentication = require("../midil/authentication")
const authorization= require("../midil/authorization")

const authorDataValidation = require("../dataValidation/authorCreatDataValidation")
const authorLoginDataValidation = require("../dataValidation/authorLoginDataValidation")

const blogsCreatValidation = require("../dataValidation/blogsCreatValidation")
const blogsUpdateValidation  = require("../dataValidation/blogUpdateValidation")
//------------------------------------------> (This is test api ) <--------------------------------------------//

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})





// ===================================================( All author api)======================================================///



//-------------------------> (When Author creat, call this api) <----------------------------------//

router.post("/authors",authorDataValidation.authorDataValidation , AuthorController.createAuthor)

//-------------------------> (When Author login,  call this api) <----------------------------------//

router.post("/login", authorLoginDataValidation.authorLoginDataValidation  , AuthorController.authorLogin)




//===========================================(All blogs api)=============================================//



//-------------------------> (When blogs creat,  call this api) <----------------------------------//

router.post("/blogs", blogsCreatValidation.blogsCreatValidation, authentication.authentication, authorization.authorizetionByBody, blogController.createBlog)

//-------------------------> (When blogs search,  call this api) <----------------------------------//

router.get("/blogs", authentication.authentication, authorization.authorizetionByQuery, blogController.findQuery)

//-------------------------> (When blog update,  call this api) <----------------------------------//

router.put("/blogs/:blogId",blogsUpdateValidation.blogsUpdateValidation   ,authentication.authentication, authorization.authorizetionByParams, blogController.blogUpdate)

//-------------------------> (When blog deleted by path params,  call this api) <----------------------------------//

router.delete("/blogs/:blogId", authentication.authentication, authorization.authorizetionByParams, blogController.deleteByblogId)

//-------------------------> (When blogs deleted by query,  call this api) <----------------------------------//

router.delete("/blogs", authentication.authentication, authorization.authorizetionByQuery, blogController.deleteByQuery)

//============================================================================================================================//






module.exports = router;
