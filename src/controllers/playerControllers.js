const playerModels=require("../models/playerModels");



const playerData = async function(req,res){
    let getData = req.body
    let savedGetdata = await playerModels.create(getData)
    res.send({data:savedGetdata})
};

const playerslist= async function(req,res){
    let allData=await playerModels.find()
    res.send({data:allData})
};






module.exports.playerData  = playerData
module.exports.playerslist = playerslist