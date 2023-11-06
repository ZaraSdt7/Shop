const joi = require("@hapi/joi");
const { MongoIDPattern } = require("../../utils/constants");
const createHttpError = require("http-errors");

const ObjectValidationID = joi.object({
id:joi.string().pattern(MongoIDPattern).error(new createHttpError.BadRequest("Enter id invalid.."))    
})
module.exports ={
    ObjectValidationID
}