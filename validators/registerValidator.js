const {check,validatorResult,body} = require("express-validator");

module.exports = [
     check("firstname")
     .isLength({
         min:1
     })
     .withMessage("Debes ingresar un nombre"),

     check("lastname")
     .isLength({

        min:1
     })
     .withMessage("Debes ingresar un apellido"),
     
     check("email")
     .isEmail()
     .withMessage("Debes ingresar un email valido"),
     
     check("password")
     .isLength({
         min:6,
         max:12
     })
     .withMessage("Debes ingresar una contraseña que contenga entre 6 y 12 caracteres"),
   
]