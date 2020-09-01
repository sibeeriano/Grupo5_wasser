const dataProductos = require("../data/dbProduct")
const dbProduct = require("../data/dbProduct")

module.exports={
    producto:function(req,res){
         
        let id=req.params.id

        let productos = dbProduct.forEach((producto) => {
            return id == producto.id});
        
            res.render('producto',{productos:productos})
        },

    carga:function(req,res){
        res.render('carga')
    },

    carrito:function(req,res){
        res.render('carrito')
    },

    sobrenosotros:function(req,res){
        res.render('sobrenosotros')
    },
}