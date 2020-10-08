const db = require('../database/models')

module.exports = {
    preRegister:function(req,res){
        req.session.store = "store"
        res.redirect('/users/register')
    },
    register:function(req,res){
        res.render('store',{
            title:"Registros de Usuarios",
           
            usuario:req.session.store
        })
    }
}