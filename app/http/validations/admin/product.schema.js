const joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constants");

const Productschema = joi.object({
name_product:joi.string().min(3).max(30).error(createHttpError.BadRequest(" Invalid name product")),
category:joi.string().regex(MongoIDPattern).error(createHttpError.BadRequest(" Invalid id category")),
sub_category:joi.string().min(3).max(30).error(createHttpError.BadRequest("Invalid sub_categories")),
detail:joi.string().min(3).max(30).error(createHttpError.BadRequest("invalid detail")),
colors:joi.array().error(createHttpError.BadRequest("Choice colors cant be empty")),
size:joi.array().error(createHttpError.BadRequest("Choice size cant be empty")),
price:joi.number().error(createHttpError.BadRequest("Invalids enter number")),
discount:joi.number().error(createHttpError.BadRequest("Invalid enter discount")),
count:joi.number().error(createHttpError.BadRequest("Invalid enter count")),
waist:joi.number().error(createHttpError.BadRequest("Invalid enter waist")),
chest:joi.number().error(createHttpError.BadRequest("Invalid enter chest")), 
sleeve:joi.number().error(createHttpError.BadRequest("Invalid enter sleeve")),
heigth:joi.number().error(createHttpError.BadRequest("Invalid enter heigth")),
width:joi.number().error(createHttpError.BadRequest("Invalid enter width")),
filename:joi.string().pattern(/(\.png|\.jpeg|\.jpg|\.webp|\.gif)$/).error(createerror.BadRequest("Invalid enter image")),
fileUploadPath:joi.allow()
})
module.exports={
    Productschema
}