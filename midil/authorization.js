const blogModel = require("../models/blogModel");
const ObjectId = require('mongodb').ObjectId



//======================================(authorizetion by body)================================================///

const authorizetionByBody = async function (req, res, next) {
    try {
        let Id = req.Id;
        let data = req.body;

        // -----------------------------------> (User athorization) <---------------------------------------//

        if (data.authorId != Id) {
            return res.status(403).send({ status: false, msg: "unauthorized person is not allowed" });
        }
        next()

    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}



//========================================(authorizetion by query)==============================================///

const authorizetionByQuery = async function (req, res, next) {
    try {
        let Id = req.Id;
        let data = req.query
        let {title, body, authorId, tags, category, subcategory} = data;

        if (!(title || body || authorId || tags || category || subcategory)) {
            return res.status(400).send({ status: false, msg: "Query cann't empty." })
        }

        // data["isDeleted"] = false
        let newData = await blogModel.find(data).find({ isDeleted: false, authorId: Id })
        if (newData.length < 1) {
            return res.status(404).send({ status: false, msg: "Data not found." })
        }

        req.let = newData
        next()
        // res.send(newData)


    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}




//========================================(authorizetion by params)==============================================///

const authorizetionByParams = async function (req, res, next) {
    try {
        let Id = req.Id;
        let data = req.params.blogId;
        if (!data) {
            return res.status(400).send({ status: false, msg: "Invalide params" })
        }

        let blogId = await blogModel.findById(ObjectId(data)).find({ isDeleted: false, authorId: Id })
        if (blogId.length < 1) {
            return res.status(404).send({ status: false, msg: "Data not found" })
        }

        req.let = blogId
        next()
        // res.send(blogId)

    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}


//======================================================================================///

module.exports = { authorizetionByBody, authorizetionByQuery, authorizetionByParams }