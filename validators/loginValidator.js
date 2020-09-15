const dbUsers = require("../data/dbUsers");

const {check,validationResult,body} = require("express-validator");

const bcrypt = require("bcrypt")
module.exports= [

    check("email")
     .isEmail()
     .withMessage("debes ingresar un Email valido :)"),

     check("password")
     .isEmpty()
     .withMessage("Debes ingresar una contraseña :)"),

     body("email")
     .custom(function(value){
         let usuario = dbUsers.filter(function(usuario){
             return usuario.email == value
         })
         
         if (usuario == false){
             return false
         }else {
             return true
         }
     })
         .withMessage("el usuario no esta registrado , registrate!"),
     body("password")
     .custom(function(value,{req}){
         let result;
         dbUsers.forEach(user => {
             if(user.email == req.body.email)
           if(!bcrypt.compareSync(value,user.password)){
               return false
           }
         });
         return true 
     })
       .withMessage("contraseña incorrecta")
    ]