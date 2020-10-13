module.exports = function RecordarUser(req,res,next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/user/iniciarsesion')
    }
}