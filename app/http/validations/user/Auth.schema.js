const joi = require("@hapi/joi");

const Registerschema = joi.object({
user_name:joi.string().required().length(30).error(new Error("Please enter a user_name")),
mobile:joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(new Error("Please enter a mobile"))    
})
