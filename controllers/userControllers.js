
const dbUsers = require('../data/dbUsers');

const {validationResult, body} = require('express-validator');
const bcrypt =require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports={
    register:function(req,res){
     res.render("registro", 
     {
         title:"Registro de Usuario",
         
    })
       
    },
    processRegister:function(req,res){
       let errors = validationResult(req);
       
       let lastID = 0;
       if(dbUsers.length > 0){
           dbUsers.forEach(user=>{
               if(user.id > lastID){
                   lastID = user.id
               }
           })
       }
    

       if(errors.isEmpty()){
            //registrar el usuario si no hay error
        let nuevoUsuario = {

            id:lastID+1,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password,10),
            rol:"user"
        }
        dbUsers.push(nuevoUsuario);
        fs.writeFileSync(path.join(__dirname,"..","data","dbUsers.json"),JSON.stringify(dbUsers),"utf-8")
          
        return res.redirect("/user/iniciarsesion")  
    }else{
            res.render("registro",{
                title: "registro de Usuarios",
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
    
    login:function(req,res){
        res.render("iniciarsesion",{
            title: "Ingreso de Usuarios",
           

        })
    },
     
    processLogin:function(req,res){
        let errors = validationResult(req);
        res.send(errors.mapped());

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