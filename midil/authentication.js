const jwt = require("jsonwebtoken");
const blogModel = require("../models/blogModel");
const ObjectId = require('mongodb').ObjectId

//=======================================(authentication)===============================================///


const authentication = async function (req, res, next) {
    try {
        let headers = req.headers["x-api-key"];

        //-------------------------------------> (Token present or not) <-------------------------------//
        if (!headers) {
            return res.status(400).send({ status: false, msg: "Please enter token number." })
        }
        //-------------------------------------> (if any other key present in key) <--------------------//
        const token = headers.split(" ")[0];

        //-------------------------------------> (Verify sekret key) <-------------------------------//

        jwt.verify(String(token), process.env.TOKEN, (err, author) => {
            if (err) {
                res.status(401).send({ status: false, msg: "Invalid Token" })
            } else {
                // res.send(author)
                req.Id = author.authorId;
                next();
            }
        })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
}

//====================================================================================//
module.exports = { authentication}