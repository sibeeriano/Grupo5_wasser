var express = require('express');
var router = express.Router();

const controller = require('../controllers/userControllers');
let loginValidator = require("../validators/loginValidator");
const registerValidator = require('../validators/registerValidator');

router.get("/iniciarsesion", controller.login);
router.post("/iniciarsesion", loginValidator, controller.processLogin);

router.get("/registrarse", controller.register);
router.post("/registrarse", registerValidator ,controller.processRegister);


router.get('/cerrarsesion', controller.cerrarsesion);
router.get("/profile", controller.profile);

router.get('/usuarios', controller.usuarios);//lista todos los usuarios
router.delete('/delete/:id', controller.delete)//se borran mas rapido

//el middlewares//
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;