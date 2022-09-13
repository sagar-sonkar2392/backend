const authorModel = require("../models/authorModel")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


//=========================(Author creat)================================//


const createAuthor = async function (req, res) {
    try {
        let data = req.body;
        let {password} = data;
        //-------------------------> (password hash by using bcrypt) <----------------------//
        const hashedPassword = await bcrypt.hash(password, 10)

        //-------------------------> (Replace password in hashing password) <----------------------//

        data["password"] = hashedPassword;

        //-------------------------> (Data creact and send user) <----------------------//

        let savedData = await authorModel.create(data)
        return res.status(201).send({ status: true, data: savedData })

    } catch (error) {
        res.status(500).send({ status: false, msgs: error.message })
    }
}

//=========================(Author Login)================================//

const authorLogin = async function (req, res) {
    try {
        let data = req.body;
        let { email, password } = data;
        //-------------------------> (Email id existencecheck in author module) <----------------------//

        let value = await authorModel.find({ email:email })

        //-------------------------> (User password validation check) <----------------------//

        let Password = await bcrypt.compare(password, value[0].password)

        //-------------------------> (User email and password response) <----------------------//

        if (!Password && value.length < 1) {
            res.status(403).send({ status: false, msg: "Please enter valide email Id and password" })
        }

        //-------------------------> (Jwt token generate) <----------------------//

        let token = jwt.sign({ authorId: value[0]._id.toString(), email: value[0].email }, process.env.TOKEN, { expiresIn: "1hr" });
        // res.setHeader("x-api-key", token);
        return res.status(200).send({ status: true, msg: "Login successfully", data: value, token: token });

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

//====================================================================================//



module.exports = { createAuthor, authorLogin }
