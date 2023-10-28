const { default: autoBind } = require("auto-bind")

module.exports=
   
     new class Controller{
        constractur(){
            autoBind(this)
        }
    }
   
