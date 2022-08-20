const mongoose = require("mongoose")


const authorsagar= new mongoose.Schema({
    authorName : String,
    age : Number,
    address: String,
    rating: Number
})

module.exports = mongoose.model("Author", authorsagar )
