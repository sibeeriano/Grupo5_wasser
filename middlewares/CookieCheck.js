const db = require('../database/models');

module.exports = function(req,res,next){
    if(req.cookies.userWasser){
        req.session.user = req.cookies.userWasser;
        next()
    }else{
        next()
    }
}
