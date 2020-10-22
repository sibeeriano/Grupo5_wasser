//M O D U L O S
var express = require('express');
var router = express.Router();
//C O N T R O L A D O R E S 

const controller = require('../controllers/userControllers');


//V A L I D A C I O N E S 
const registerValidator = require('../validators/registerValidator');
let loginValidator = require("../validators/loginValidator");

//M I D D L E W A R E S
const multerAvatar = require('../middlewares/multerAvatar');

// R U T A S 
router.get("/iniciarsesion", controller.login);
router.post("/iniciarsesion", loginValidator, controller.processLogin);

router.get("/registrarse", controller.register);
router.post("/registrarse", multerAvatar.any(),registerValidator, controller.processRegister);


router.get('/cerrarsesion', controller.cerrarsesion);

router.get('/perfil/:id', controller.perfil);
router.get('/editarperfil/:id', controller.vistaEditar)
router.post("/updateProfile/:id", multerAvatar.any(), controller.guardarEditar);


router.get('/usuarios', controller.usuarios);//lista todos los usuarios
router.delete('/delete/:id', controller.delete)//se borran mas rapido

/*
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});*/


module.exports = router;