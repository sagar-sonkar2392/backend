const mongoose = require("mongoose")



const myBookSchema = new mongoose.Schema({
    name: String,
    author_id:{
        type: Number,
        rquire: true
    },
    price: Number,
    ratings: Number

})

module.exports = mongoose.model("book2", myBookSchema)