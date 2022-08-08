const express = require('express');
const lodash = require('lodash');
const abc = require('../introduction/intro')
const xyz =require('../logger/logger')
const info =require('../util/helper')
const formatter=require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    xyz.Welcome()
    info.today()
    formatter.form()

const arrayOfMonths= ['jan','feb','mar','april','may','june','july','aug','sept','oct','nov','dec']
 console.log (lodash.chunk(arrayOfMonths,4));

 const oddNum=[1,3,5,7,11,13,17,19,23,29]
 console.log(lodash.tail(oddNum));

const num1= [1,2,3,4]
const num2=[2,3,4,5]
const num3=[3,4,5,6]
const num4=[6,7,8,9]
const num5=[7,8,9,10]
console.log(lodash.union(num1,num2,num3,num4,num5));


const moVies=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
let obj =lodash.fromPairs(moVies)
console.log(obj);



    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason