const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    caterGory : String, 
    bookId : {
         type : Number,
          unique : true,
          require : true,
    },
    year: String,
   
    totalPages: Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', booksSchema)