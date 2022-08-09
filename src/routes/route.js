const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)   
})

//problem 1
router.get('/movies/', function (req,res){
    let movies  = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
});


//problem 2

router.get('/movies/:indexNumber',function (req, res){
    let moviesName = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let abc = req.params.indexNumber
    console.log(moviesName[abc])
    res.send(moviesName[abc])
});


//problem 3

router.get('/my/movies/:indexNumber', function (req, res){
    const movies = ["Tenet","The Btamna Begins","Pather Pachali","Charlie The Choclate Factory"];
    const index = req.params.indexNumber;
       if(index<4){
        res.send(movies[index]);
        console.log(movies[index]);
       }else{
        res.send("use a valid index");
        console.log("use a valid index");
       }
});


//problem 4

router.get('/hit/films', function (req, res){
    const films = [{
     "id": 1,
     "name": "The Shining"
    }, {
     "id": 2,
     "name": "Incendies"
    }, {
     "id": 3,
     "name": "Rang de Basanti"
    }, {
     "id": 4,
    "name": "Finding Nemo"
    }]
    res.send(films);
});

//problem 5
router.get('/films/:filmId', function(req,res){
    const films = [{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
       "name": "Finding Nemo"
       }]
       const xyz = req.params.filmId;
       if(xyz<5 && xyz > 0){
        res.send(films[xyz-1]);
        console.log((films[xyz-1]))
       }else{
        res.send("No movie exists with this id")
        console.log("No movie exists with this id")
       }

   });
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;