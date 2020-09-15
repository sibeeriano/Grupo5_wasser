const dbUsers = require("../data/dbUsers")
const {check,validationResult,body} = require("express-validator");

module.exports = [
     check("nombre")
     .isLength({
         min:1
     })
     .withMessage("Debes ingresar un nombre"),

     check("apellido")
     .isLength({

        min:1
     })
     .withMessage("Debes ingresar un apellido"),
     
     check("email")
     .isEmail()
     .withMessage("Debes ingresar un email valido"),
     
    body("email")
    .custom(function(value){
     for(let i = 0; i<dbUsers.length;i++){
         if(dbUsers[i].email == value){
             return false 
         }
     }    
           return true
    })
    .withMessage("Este Email ya esta registrado :("),


     check("password")
     .isLength({
         min:6,
         max:12
     })
     .withMessage("Debes ingresar una contraseña que contenga entre 6 y 12 caracteres"),
   

     body("password2")
     .custom(function(value,{req}){
         if(value != req.body.password){
             return false
         }
         return true
     })
       
     .withMessage("Las contraseñas no coinciden")
    ]