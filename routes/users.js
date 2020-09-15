var express = require('express');
var router = express.Router();

const controller = require('../controllers/userControllers');
let loginValidator = require("../validators/loginValidator");
const registerValidator = require('../validators/registerValidator');

router.get("/iniciarsesion", controller.login);
router.post("/iniciarsesion", loginValidator, controller.processLogin);

router.get("/registrarse", controller.register);
router.post("/registrarse", registerValidator ,controller.processRegister);



router.get("/profile", controller.profile);

module.exports = router;