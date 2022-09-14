const internModel = require("../models/internModel")


const internCreate = async (req,res) => {
    let data = req.body
    let collegeId = data.college_id
    if(!collegeId) return res.send({msg: 'CollegeId is mandatory in the request'})

    

    let savedData= await internModel.create(data)
    res.send({data: savedData})
}

module.exports = {internCreate}