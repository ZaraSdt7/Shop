const joi = require("@hapi/joi");
const createHttpError = require("http-errors");

const Registerschema = joi.object({
user_name:joi.string().required().length(30).error(new Error("Please enter a user_name")),
mobile:joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(new Error("Please enter a mobile"))    
})
const Loginschema = joi.object({
mobile:joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(new Error("Please enter a mobile")) , 
code:joi.string().min(4).max(6).error(new Error("Please enter code"))
})
const Checkloginschema = joi.object({
code:joi.string().min(4).max(6).error(new Error("The enter code is incorrect")),
mobile:joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(new Error("Please enter a mobile"))    
})
 const Profileschema = joi.object({
fullname:joi.string().error(createHttpError.BadRequest("please enter full name")),
mobile:joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(new Error("Please enter a mobile")),
address:joi.string().error(createHttpError.BadRequest("Please enter address"))     
})
module.exports={
    Registerschema,
    Loginschema,
    Checkloginschema,
    Profileschema
}