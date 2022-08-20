const publisher = require("../models/publishersagar")

const createPublisher = async function (req,res){
    let data = req.body
    let publisherCreated = await publisher.create(data)
    res.send({msg: publisherCreated})

}



module.exports.createPublisher=createPublisher
