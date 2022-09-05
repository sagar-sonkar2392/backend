// { fname: { mandatory}, lname: {mandatory}, title: {mandatory, enum[Mr, Mrs, Miss]}, email: {mandatory, valid email, unique}, password: {mandatory} }

const mongoose= require('mongoose');

const authorSchema=new mongoose.Schema({
    
        fname:{
            type:String,
            required:true},

        lname:{
            type:String,
            required:true},
        
        title:{
            type:String, 
            required:true  }, 

        gender:{
              type:String,
              enum:[Mr, Mrs, Miss]},

        email:{
              type:String,
               requred:true,
                unique:true},

        password:{
            type:String, 
            required:true} ,   
    

}, {timestamps:true});

module.exports = mongoose.model('Author', authorSchema)




