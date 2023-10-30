const { default: autoBind } = require("auto-bind")

module.exports=
   
      class Controller{
        constractur(){
            autoBind(this)
        }
    }
   
