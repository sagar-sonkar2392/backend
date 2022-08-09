const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber
    let sumOne = ((arr.length+1)*(arr.length+2))/2
    let sumArray= 0
    for(let i = 0; i<arr.length; i++){
        sumArray = sumArray+arr[i]
    }
    missingNumber = sumOne-sumArray

        

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
    console.log({data:missingNumber})
});

app.get("/sol2", function (req, res) {

    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
               
    let arr2 = [33, 34, 35, 37, 38]
    let missingNumber2
     
    ///LOGIC WILL GO HERE 
    let sum2  =  (arr2.length+1)*(arr2[0] + (arr2[arr2.length - 1]))/2       /// n * (first + last) / 2
    let sumArray2 = 0
    for(let j = 0; j < arr2.length; j++) {
    sumArray2 = sumArray2 + arr2[j]
    }
    
    missingNumber2 = sum2 - sumArray2
    
    res.send(  { data: missingNumber2  }  );
    console.log(  { data: missingNumber2  }  )
    
    });



app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

