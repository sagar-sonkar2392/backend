const bookassi =require ("../models/bookdata")

const createBooks =async function(req,res){
    let data = req.body
    let saveBookData = await bookassi.create(data)
    res.send({msg :saveBookData})
}

const booklist= async function (req, res) {
    let bookAndAuthor= await bookassi.find().select({authorName : 1, bookName : 1, _id:0 });
    res.send({msg : bookAndAuthor})
}

const getBooksInYear =async function(req,res){
    let data = req.body
    let bookInYear = await bookassi.find({year:2021})
    res.send({msg :bookInYear})
}

const getParticular= async function(req,res){
let printBook = await bookassi.find( { year:  2021  }) 
res.send({msg: printBook})
}

// const getXINRBook= async function (req, res) {
//     let booksprice= await bookassi.find({"price.indianPrice" : {$nin : ["250INR" , "300INR" , "350INR" ,"450INR" ,"1000INR"]}}).select({bookName : 1,price : 1, _id : 0});
//     res.send({msg : booksprice})
// }

const getXINRBook= async function (req, res) {
    let booksprice= await bookassi.find({"price.indianPrice" : {$in : ["100INR" , "200INR" , "500INR" ]}}).select({bookName : 1,price : 1, _id : 0});
    res.send({msg : booksprice})
}



const getRandomBooks  =async function(req,res){
    let stocksOrPages = await bookassi.find({
        $or : [{stockAvailable: true}, {totalPages:{$eq:500}}]
    })
    res.send({msg :stocksOrPages})
}





module.exports.createBooks =createBooks
module.exports.booklist = booklist
module.exports.getBooksInYear=getBooksInYear

module.exports.getXINRBook=getXINRBook
module.exports.getRandomBooks=getRandomBooks
module.exports.getParticular= getParticular