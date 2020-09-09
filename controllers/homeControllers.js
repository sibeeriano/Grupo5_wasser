const dbProduct = require("../data/dbProduct");


module.exports={
    index:function(req,res){
        res.render('index',{productos: dbProduct})

    },

    sobreNosotros:function(req,res){
        res.render('sobrenosotros')
    }
}