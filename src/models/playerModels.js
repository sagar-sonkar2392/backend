const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    playerId: {
        type: String,
        unique: true,
        required: true
    },
    score: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });



module.exports = mongoose.model('Player', playerSchema) 



// String, Number
// Boolean, Object/json, array