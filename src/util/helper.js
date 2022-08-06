let date = new Date();
let day =date.getDate();
let month =date.getMonth() +1;
let year =date.getFullYear();

let currrentDate = `${day}-${month}-${year}`;
console.log(currrentDate);

const info = function(){
    console.log("Batch-plutonium,week-3,Day-8,the topic being taught today is  Node.js module system")

}


module.exports.today =info