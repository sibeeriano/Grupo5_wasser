//const db = require('../database/models'); probando 

module.exports = function(req,res,next){
    if(req.cookies.userWasser != undefined){
        req.session.user = req.cookies.userWasser;
        next()
    }else{
        next()
    }
}
