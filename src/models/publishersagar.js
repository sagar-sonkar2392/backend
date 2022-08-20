const mongoose = require("mongoose")



const publishersagar = new mongoose.Schema({
    name: String,
    headQuarter: String
})

module.exports = mongoose.model("publisher1",publishersagar)
