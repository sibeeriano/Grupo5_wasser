//const dbProduct = require("../data/database");
let db = require('../database/models')

module.exports={
    index:function(req,res){
        res.render('index',{
        user:req.session.user})
    },

    sobreNosotros:function(req,res){
        res.render('sobrenosotros',{
            user:req.session.user})
    }
}