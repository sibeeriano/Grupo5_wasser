const dbProducts = require("../data/database");
const {validatorResult} = require("express-validator");


module.exports={
    register:function(req,res){
     res.render("registro", 
     {
         title:"Registro de Usuario"
    })
       
    },
    processRegister:function(req,res){
       let errors = validatorResult(req);
        if(errors.isEmpty()){
            //registrar el usuario si no hay error
        }else{
            res.render("registro",{
                title: "registro de Usuarios",
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
    
    iniciarsesion:function(req,res){
        res.render("iniciarsesion",{
            title: "Ingreso de Usuarios"
        })
    },
     
    processLogin:function(req,res){

    },

    profile:function(req,res){
        res.render("userProfile",{
            title:"Perfil del Usuario",
            productos: db.product.filter(producto=>{
                return producto.category != "visited" && producto.category != "in-sale"
            })
        })

        
    }

}