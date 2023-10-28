const httpStatus = require("http-status");
const controller = require("../controller");

module.exports = new (class HomeController extends controller{
    async Shop_Page(req,res,next){
        try {
            return res.status(httpStatus.OK).send("Shop store")
        } catch (error) {
            next(error)
        }
    }
})();