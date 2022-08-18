const author = require("../models/authorModel")



const createAuthor = async function(req,res){
    let data = req.body
    let printAuthor = await authorModel.create(data)
    res.send({msg : printAuthor})
}

module.exports.createAuthor= createAuthor