const validator = require("email-validator");
const authorModel = require("../models/authorModel");
const passValidation = require("../dataValidation/passwordValidation");

const authorDataValidation = async function (req, res, next) {
    try {
        let data = req.body
        let { fname, lname, title, email, password} = data

        //------------------------> (If first name is not present) <------------------------------//
        if (typeof (fname) === "undefined" || fname === null) {
            return res.status(400).send({ status: false, msg: "please Enter First Name." })
        }

        //------------------------> (If first name must be string) <------------------------------//

        if (typeof fname !== 'string') {
            return res.status(400).send({ status: false, msg: "Make sure first name is string." })
        }


        //------------------------> (If first name must be aq content letter) <------------------------------//

        if (fname.trim().length === 0) {
            return res.status(400).send({ status: false, msg: "Make sure first name is content a letter." })
        }

        //------------------------> (If last name is not present) <------------------------------//

        if (typeof (lname) === "undefined" || lname === null) {
            return res.status(400).send({ status: false, msg: "please Enter Last Name." })
        }

        //------------------------> (If last name must be string) <------------------------------//

        if (typeof lname !== 'string') {
            return res.status(400).send({ status: false, msg: "Make sure last name is string." })
        }

        //------------------------> (If last name must be a content letter) <------------------------------//

        if (lname.trim().length === 0) {
            return res.status(400).send({ status: false, msg: "Make sure last name is content letter." })
        }

        //------------------------> (If title is not present) <------------------------------//

        if (typeof (title) === "undefined" || title === null) {
            return res.status(400).send({ status: false, msg: "please Enter your title." })
        }

        //------------------------> (If title must be from enum) <------------------------------//
        let arrofenum = ["Mr", "Mrs", "Miss"]
        let index = arrofenum.indexOf(title);
        if (index == -1) {
            return res.status(400).send({ status: false, msg: "Make sure title is likes Mr, Mrs, Miss " })
        }

        //------------------------> (If email is not present) <------------------------------//

        if (typeof (email) === "undefined" || email === null) {
            return res.status(400).send({ status: false, msg: "please Enter your email." })
        }

        //------------------------> (If email must be string) <------------------------------//

        if (typeof email !== 'string') {
            return res.status(400).send({ status: false, msg: "Make sure email is string." })
        }

        //------------------------> (If email must be a content letter) <------------------------------//

        if (email.trim().length === 0) {
            return res.status(400).send({ status: false, msg: "Make sure email is content letter." })
        }

        //-------------------------> (If email Id is invalide ) <----------------------------------//

        let emailId = validator.validate(email);
        if (emailId != true) return res.status(400).send({ status: false, msg: "Invalid Email Id." })

        //------------------------> (If Password is not present) <------------------------------//

        if (typeof(password) === "undefined" || password === null) {
            return res.status(400).send({ status: false, msg: "please Enter a password." })
        }

        //------------------------> (If passworde must be string) <------------------------------//

        if (typeof password !== 'string') {
            return res.status(400).send({ status: false, msg: "Make sure password is string." })
        }

        //------------------------> (If passworde must be a content letter) <------------------------------//

        if (password.trim().length === 0) {
            return res.status(400).send({ status: false, msg: "Make sure password is content letter." })
        }

        //-------------------------> (If pass Id is invalide ) <----------------------------------//

        let message = passValidation.checkPasswordValidity(password);
        if (message) {
            return res.status(400).send({ status: false, msg: message })
        }

        //-------------------------> (If email Id is invalide ) <----------------------------------//

        let EmailId = await authorModel.findOne({ email: email })
        if (EmailId) return res.status(404).send({ status: false, msg: "Email Id alredy exist.." })


        //-------------------------> (If all is good then call next function) <----------------------//

        next()


    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


module.exports = { authorDataValidation }