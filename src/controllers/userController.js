const UserModel= require("../models/userModel")
const books =require ("../bookscollection/books")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createbookName= async function (req,res){
    let data1 =req.body
    let savedData1 =await books.create(data1)
    res.send({msg: savedData1})
}

const  getbooksList = async function(req,res){
    let allbooks= await books.find()
    res.send({msg:allbooks})
}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData

module.exports.createbookName= createbookName
module.exports.getbooksList= getbooksList