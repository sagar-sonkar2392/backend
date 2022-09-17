// const authorModel = require("../models/authorModel")
const passValidation = require("../dataValidation/passwordValidation");
const validator = require("email-validator");



const authorLoginDataValidation = async function (req, res, next) {
    try {
        let data = req.body;
        let { email, password } = data;

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
        if (emailId == false) return res.status(400).send({ status: false, msg: "Invalid Email Id." })

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

        // let EmailId = await authorModel.findOne({ email: email })
        // if (!EmailId) return res.status(404).send({ status: false, msg: "Email Id not exist.." })

        //-------------------------> (If all is good then call next function) <----------------------//

        next()


    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


module.exports = { authorLoginDataValidation }