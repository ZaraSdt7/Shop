module.exports ={
MongoIDPattern:/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,

ROLES:Object.freeze({
USER:"USER",
ADMIN:"ADMIN"    
}),
PERMISSIONS:Object.freeze({
USER:["profile"],
ADMIN:["all"]    
}),
ACCSESS_TOKEN:"",
REFRESH_TOKEN:""
}