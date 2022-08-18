const book2Model =require("../models/book2Model")
const authorModel = require("../models/authorModel")


const createBooks = async function(req,res){
    let data = req.body
    let printBook = await book2Model.create(data)

    res.send({msg : printBook})

}  

const getBooksChetan = async function(req,res){
    let data1 = await authorModel.find({author_name: "Chetan Bhagat"}).select({author_id:1})
    let book1 = await book2Model.find({author_id:data1[0].author_id})
    return res.send({msg: book1})


}

const twoStateUpdate = async function(req,res){
    let book2= await book2Model.findOneAndUpdate({name: "Two states"}, {$set:{price:100}}, {new:true})
    let authorData = await authorModel.find({author_id:book2.author_id}).select("author_name")
    let price1 = book2.price
    return res.send({ msg: authorData, price1})
}

const costIn = async function(req,res){
    let book3 = await book2Model.find({price:{$gte:50, $lte:100}}).select({author_id:1})
    let id = book3.map(a=> a.author_id)
    let arr =[]
    for (let i=0; i<id.length; i++){
        let x = id[i]
        let author1 = await authorModel.find({author_id:x}).select({author_id:1, author_name:1})
        arr.push(...author1)
    }
    res.send({msg: arr})
}



module.exports.createBooks = createBooks
module.exports.getBooksChetan = getBooksChetan
module.exports.twoStateUpdate = twoStateUpdate
module.exports.costIn =costIn