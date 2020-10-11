module.exports = function(req,res,next){
    if(req.session.user){
        res.locals.user =req.session.user  
    }
    next()
}
//este codigo me permite tener el session user en todas las vistas