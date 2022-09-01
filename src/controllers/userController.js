const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

const createUser = async function (req, res) {
  try {

    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({ msg: savedData });
  }
  catch (error) {
    console.log(error)
    res.status(400).send({ error: error, msg:"BAD REQUEST" })
  }
};

const loginUser = async function (req, res) {
 try{
  let userName = req.body.emailId;
  let password = req.body.password;


  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(403).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "functionup-Plutonium"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token });
 }
 catch(error){
  res.status(500).send({erroe:error.message})
 }
};

const getUserData = async function (req, res) {
  try{
    let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
    return res.status(401).send({ status: false, msg: "No such user exists" })};

  res.send({ status: true, data: userDetails });
  }
  catch(error){
    res.status(500).send({error:error.message})
  }
};

const updateUser = async function (req, res) {
 try{
  if(!req.params.userId) res.status(400).send({msg:"Enter UserId"})
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(403).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    userData,
    { new: true }
  );
  res.status(201).send({ status: true, data: updatedUser });
 }
 catch(error){
  res.status(500).send({error:error.message})
 }
};

const deleteUser = async function (req, res) {
  try{
    if(!req.params.userId)res.status(400).send({msg:"Enter UserId"})
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
  
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { isDeleted: true },
      { new: true }
    );
    res.send({ status: true, data: updatedUser });
  }
  catch(error){
    res.status(500).send({error:error.message})
  }


};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;