// const { updateMany } = require("../models/authorModel");
const authorModel = require("../models/authorModel")
const blogModel = require("../models/blogModel")
const ObjectId = require('mongodb').ObjectId
const moment = require("moment")

//==================================== Blogs creat post api ===============================//


const createBlog = async function (req, res) {
    try {
        let data = req.body;
        //----------------------------> (blog creat by auth author) <------------------------------//

        let savedData = await blogModel.create(data)
        res.status(201).send({ status: true, data: savedData })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}


//===================================== find blogs data by query params =======================//

const findQuery = async function (req, res) {
    try {
        let data = req.query;
        const newData = await blogModel.find(data).find({isDeleted: false});
        if (newData.length < 1) return res.status(404).send({ status: false, msg: "Data not found" })
        return res.status(200).send({ status: true, data: newData })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}


//============================== PUT /blogs/:blogId ================================//

const blogUpdate = async function (req, res) {
    try {
        let data = req.let
        let savedData = req.body;
        let data1 = data[0]._id
        let time = moment().format(process.env.TIME);
        savedData["publishedAt"] = time;
        let newData = await blogModel.findOneAndUpdate({ _id: data1 }, savedData, { new: true })
        res.status(200).send({ status: true, data: newData })
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

//============================ DELETE /blogs/:blogId (params)=================================//

const deleteByblogId = async function (req, res) {
    try {
        let data = req.let;
        let time = moment().format(process.env.TIME);
        await blogModel.findOneAndUpdate({ _id: data[0]._id }, { $set: { isDeleted: true, deletedAt: time } }, { new: true })
        res.status(200).send({ status: true, msg: "Blog deleted successfully" })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}


//============================ DELETE /blogs/:blogId (Query)=================================//

const deleteByQuery = async function (req, res) {
    try {
        let data = req.let;
        let time = moment().format(process.env.TIME); // set live time using moment module.
        await blogModel.updateMany(data, { $set: { isDeleted: true, deletedAt: time } }, { new: true })
        res.status(200).send({ status: true, msg: "Blog deleted successfully" })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }

}



module.exports = {createBlog, findQuery, blogUpdate, deleteByblogId, deleteByQuery}
