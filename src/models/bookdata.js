const mongoose = require("mongoose")

const Bookdata = new mongoose.Schema(
    {
        bookName: {
            type: String,
            require: true,
        },

        price:{
            indianPrice: String,
            europeanPrice : String,

        },
        year :{
        
        type: String,
        default: 2021,
        }, 
        tags:[String],
        authorName: String,
        totalPages : Number,
        stockAvailable: Boolean,
    }, {timestamps: true});

    module.exports =mongoose.model("bookassi" , Bookdata)