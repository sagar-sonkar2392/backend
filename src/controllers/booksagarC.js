const bookModel = require("../models/booksagar")
const authorModel =require("../models/authorsagar")
const publisherModel =require("../models/publishersagar")



const createBook= async function (req, res) {
    let data= req.body
    
    if(!data.author){
       return res.send("Please Provide Author detail")
    }
    else if (!data.publisher){
        return res.send("Provide publisher Details")
    }
    isAuthorValid= await authorModel.findById(data.author)
    isPublisherValid = await publisherModel.findById(data.publisher)
     if(!isAuthorValid){
       return res.send("Please Provide valid Author detail")
    }
    else if(!isPublisherValid){
        return res.send("Please Provide Vaild Publisher")
    }
    else{
        let bookCreated = await bookModel.create(data)

       return res.send({msg: bookCreated})
    }
        // res.send("all good")
}
   
const getBooks = async function (req, res) {
        let specificBook = await bookModel.find().populate("author").populate("publisher")
        return res.send({data: specificBook})
}


const updateCover = async function (req,res) {
    let publisherId = await publisherModel.find({name:{$in: ["Penguin", "HarperCollins"]}}).select({_id:1})
    let updateNewBook = await bookModel.updateMany({publisher:publisherId},{$set:{isHardCover:true, new:true, upsert:true}})

    let authorId = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let updateRating = await bookModel.updateMany({author:authorId},{$inc:{price:10}})

   return res.send("update all")
}


module.exports.createBook=createBook
module.exports.getBooks=getBooks
module.exports.updateCover=updateCover