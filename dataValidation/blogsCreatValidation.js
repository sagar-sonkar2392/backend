const validData = require('./blogDataValidation');

//======================================(authorizetion by body)================================================///

const blogsCreatValidation = async function (req, res, next) {
    try {
        let data = req.body;
        let { title, body, authorId, tags, category, subcategory } = data;

        //------------------------------------> (Title must be present.) <----------------------------------------------------//


        let message6 = validData.isTitle(title)
        if (message6) {
            return res.status(400).send({ status: false, msg: message6})
        }
        //------------------------------------> (Body must be present.) <----------------------------------------------------//

        let message5 = validData.isBody(body)
        if (message5) {
            return res.status(400).send({ status: false, msg: message5})
        }

        //-----------------------> (Author Id must be present.) <----------------------------//

        let message4 = validData.isAuthorId(authorId)
        if (message4) {
            return res.status(400).send({ status: false, msg: message4 })
        }


        //------------------------------------> (Tags must be present.) <----------------------------------------------------//

        let message3 = validData.isTags(tags)
        if (message3) {
            return res.status(400).send({ status: false, msg: message3})
        }


        //-----------------------> (Category must be present.) <-------------------------------------//

        let message2 = validData.isCategory(category)
        if (message2) {
            return res.status(400).send({ status: false, msg: message2 })
        }

        //------------------------------------> (Subcategory must be present.) <----------------------------------------------------//

        let message1 = validData.isSubCategory(subcategory)
        if (message1) {
            return res.status(400).send({ status: false, msg: message1})
        }

        //-------------------------> (If all is good then call next function) <----------------------//

        next()

    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}


module.exports = { blogsCreatValidation }