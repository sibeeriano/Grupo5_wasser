const dbProduct = require("../data/database");


module.exports={
    index:function(req,res){
        res.render('index',{productos: dbProduct})

    },

    sobreNosotros:function(req,res){
        res.render('sobrenosotros')
    }
}