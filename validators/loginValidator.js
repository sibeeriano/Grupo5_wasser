const db = require("../database/models");

const {check,validationResult,body} = require("express-validator");
const bcrypt = require("bcrypt")

module.exports= [
    check("email")
     .isEmail()
     .withMessage("Debes ingresar un email válido "),

     body("email")
     .custom(function(value){
        return db.User.findOne({
            where:{
                email:value
            }
        })
        .then(user => {
            if(!user){
                return Promise.reject("El usuario no esta registrado")
            }
        })
      }),
      
      body('password')
      .custom(function(value,{req}){
        
          return db.User.findOne({
              where:{
                  email:req.body.email
              }
          })
          .then(user => {
              console.log(user)
              if(!bcrypt.compareSync(value,user.dataValues.password)){
                  return Promise.reject()
              }
          })
          .catch(()=>{
              return Promise.reject("Contraseña incorrecta")
          })
      })
]