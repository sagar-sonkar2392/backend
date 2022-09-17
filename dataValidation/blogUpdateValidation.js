const validData = require('./blogDataValidation');

//======================================(authorizetion by body)================================================///

const blogsUpdateValidation = async function (req, res, next) {
    try {
        let data = req.body;
        let { title, body, authorId, tags, category, subcategory } = data;        
        if (!(title || body || authorId || tags || category || subcategory)) {
            return res.status(400).send({ status: false, msg: "Body data not empty" })
        }

        //-------------------------> (If all is good then call next function) <----------------------//

        next();

    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}


module.exports = { blogsUpdateValidation }