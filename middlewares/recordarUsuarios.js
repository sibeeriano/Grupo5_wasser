
//desde aca trabaja bucco, lo deje listo
 
module.exports = function RecordarUser(req,res,next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/users/iniciarsesion')
    }
}