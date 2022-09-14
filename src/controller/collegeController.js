const collegeModel = require("../models/collegeModel")

const collegeCreate = async (req,res) => {
    let data = req.body
   let{name, fullName, logoLink}  = data

   if(!name){
    return res.status(400).send({ status: false, msg: 'Please fill name' })
   }
   if(!fullName){
    return res.status(400).send({ status: false, msg: 'Please fill full name' })
   }
   if(!logoLink){
    return res.status(400).send({ status: false, msg: 'Please fill logo link' })
   }

    let collegeData = await collegeModel.create(data)

    res.send({data: collegeData})
}

module.exports = {collegeCreate}