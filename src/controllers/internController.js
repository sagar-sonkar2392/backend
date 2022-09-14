const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")

const interns = async function(req,res){
    try {

        let data = req.body;
    
    let {name, mobile, email, collegeName} = data;
    
    if(name!==name || name=="") return res.status(400).send({status:false, message:"please use correct name"})
    
    if(mobile!==mobile || mobile=="") return res.status(400).send({status:false, message:"please use correct mobile number"})
    
    if(email!==email || email=="") return res.status(400).send({status:false, message:"please use correct email"})
    
    if(collegeName!==collegeName || collegeName=="") return res.status(400).send({status:false, message:"please use correct collegeName"})

    let checkCollege = await collegeModel.findOne({name:collegeName})
    
    let collegeId = checkCollege._id
    data = {name, mobile, email, collegeId}

    let createIntern = await internModel.create(data)

    return res.status(201).send({status:true, data:createIntern })
        
    } catch (error) {
        return res.status(500).send({status:false, message:error.message})
    }
    

}
module.exports.interns=interns

// Intern
//    {
//     "isDeleted" : false,
//     "name" : "Jane Does",
//     "email" : "jane.doe@iith.in",
//     "mobile" : "90000900000",
//     "collegeId" : ObjectId("888771129c9ea621dc7f5e3b")
// }


// POST /functionup/interns

// Create a document for an intern.

// Also save the collegeId along with the document. Your request body contains the following fields - { name, mobile, email, collegeName}

// Return HTTP status 201 on a succesful document creation. Also return the document. The response should be a JSON object like this

// Return HTTP status 400 for an invalid request with a response body like this