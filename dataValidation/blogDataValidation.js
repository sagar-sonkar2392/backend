

//-------------------------------------------->  (Title validation) <----------------------------------------//

const isTitle = (title) => {
    try {

        //------------------------------------> (Title must be present.) <----------------------------------------------------//

        if (typeof (title) === "undefined" || title === null) {
            return "please Enter yor blog title."
        }

        //------------------------> (If title must be string) <------------------------------//

        if (typeof title !== 'string') {
            return "Make sure title is string."
        }

        //------------------------> (If title must be a content) <------------------------------//

        if (title.trim().length === 0) {
            return "Make sure title is content title."
        }
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


//-------------------------------------------->  (Body validation) <----------------------------------------//


const isBody = (body) => {
    try {

        //------------------------------------> (Body must be present.) <----------------------------------------------------//

        if (typeof (body) === "undefined" || body === null) {
            return "please Enter your blog body."
        }

        //------------------------> (If body must be string) <------------------------------//

        if (typeof body !== 'string') {
            return  "Make sure body is string." 
        }

        //------------------------> (If body must be a content letter) <------------------------------//

        if (body.trim().length === 0) {
            return "Make sure body is content letter."
        }
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


//-------------------------------------------->  (authorId validation) <----------------------------------------//


const isAuthorId = (authorId) => {
    try {

        //-----------------------> (Author Id must be present.) <----------------------------//

        if (typeof (authorId) === "undefined" || authorId === null) {
            return "please Enter your author id."
        }

        //------------------------> (If author id must be string) <------------------------------//

        if (typeof authorId !== 'string') {
            return "Make sure author id is string." 
        }

        //------------------------> (If author id must be a content) <------------------------------//

        if (authorId.trim().length === 0) {
            return "Make sure author id is content letter."
        }

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


//-------------------------------------------->  (Tags validation) <----------------------------------------//


const isTags = (tags) => {
    try {

        //------------------------------------> (Tags must be present.) <----------------------------------------------------//

        if (typeof (tags) === "undefined" || tags === null) {
            return "please Enter your blog tags(array of string)."
        }


        //------------------------> (If tags must be array of string) <------------------------------//

        if (typeof tags !== 'object') {
            return "Make sure tags is array of string."
        }

        //------------------------> (If tags must be array of content letter) <------------------------------//

        if (tags.length < 1) {
            return "Make sure tags is array of conten letter."
        }

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

//-------------------------------------------->  (Category validation) <----------------------------------------//


const isCategory = (category) => {
    try {

        //-----------------------> (Category must be present.) <-------------------------------------//

        if (typeof (category) === "undefined" || category === null) {
            return "please Enter your blog category."
        }

        //------------------------> (If category must be string) <------------------------------//

        if (typeof category !== 'string') {
            return "Make sure category is string." 
        }

        //------------------------> (If category must be a conent letter) <------------------------------//

        if (category.trim().length === 0) {
            return "Make sure category is content letter."
        }
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

//-------------------------------------------->  (Sub Category validation) <----------------------------------------//

const isSubCategory = (subcategory) => {
    try {

        //------------------------------------> (Subcategory must be present.) <----------------------------------------------------//

        if (typeof (subcategory) === "undefined" || subcategory === null) {
            return "please Enter  your blog subcategory." 
        }

        //------------------------> (If Sub category must be string) <------------------------------//

        if (typeof subcategory !== 'string') {
            return "Make sure subcategory is string." 
        }

        //------------------------> (If Sub Categoy must be a content letter) <------------------------------//

        if (subcategory.trim().length === 0) {
            return "Make sure subcategory is content letter." 
        }

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


module.exports = {isTitle, isBody, isAuthorId, isTags, isCategory, isSubCategory}