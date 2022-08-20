const author = require("../models/authorsagar")

const createAuthor= async function (req, res) {
    let data= req.body
    let authorCreated = await author.create(data)
    res.send({msg: authorCreated})
}


module.exports.createAuthor=createAuthor
