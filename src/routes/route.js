const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    let id = req.body.user
    let pwd= req.body.password

    console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

router.post("/my/test-post", function(req, res) {
    let arr= [ "sagar",{
        hobbies:"cricket"
    }]
    let ele= req.body.profession
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

router.post("/my/test-post-2", function(req, res) {
    let arr= [{
        naMe:"sagar",
        gender:"male"
    }]
    let ele= req.body
    arr.push(ele)

    res.send(  { msg: arr , status: true }  )
})

// problem=1

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {

    let newPlayer = req.body;
    let oldPlayers =players;

    for(i=0; i<oldPlayers.length; i++){
        let oldPlayers =players[i]
        if(newPlayer.name == oldPlayers.name)
        return res.send("The player name is already exist")

    }
    oldPlayers.push(newPlayer)

       //LOGIC WILL COME HERE
       res.send(  { data: players , status: true }  )
       console.log(newPlayer)
   })

//    problem=2

let person = 
[
    {
      name : "PK",
     age: 10,
     Votingstatus :false
   },
   {
     name: "AA",
     age :70,
     Votingstatus : false
   },
   {
     name: "SK",
     age :20,
     Votingstatus : false
   },
   {
     name: "SC",
      age :5,
      Votingstatus : false
    },
    {
      name: "HO",
       age :40,
       Votingstatus : false
    }
]

router.post('/votingage', function(req , res){
    let arr =[];
    let personAge = req.query.age;
    for(i=0; i<person.length; i++){
        if(person[i].age> personAge ){
            person[i].Votingstatus = true; 
          arr.push(person[i]);       
        }
    }
    res.send(arr);
    console.log(arr);
})






module.exports = router;