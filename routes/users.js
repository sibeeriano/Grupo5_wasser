var express = require('express');
var router = express.Router();
const controller = require('../controllers/userControllers')

let registerValidator = require("../validators/registerValidator");

let loginValidator = require("../validators/loginValidator");

/* aca cree validador de registro, buqo te amo */
router.get('/registrarse', controller.register);
router.post("/registrarse",registerValidator, controller.processRegister);

router.get("/profile", controller.profile);

/* aca cree el los validators de cada uno, procesa el login y blabla , facundo te amo */
router.get('/iniciarsesion', controller.iniciarsesion);
/* aca abajo falta pòner el loginvalidator! */
router.post("/iniciarsesion", controller.processLogin);

module.exports = router;