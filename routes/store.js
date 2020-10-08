// ======> MODULOS <======= //

const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

// ======> CONTROLADORES <======= //

const controller = require('../controllers/storeControllers') //requiero el controlador que se hará cargo de la lógica


// ======> MIDDLEWARES <======= //

router.get('/preRegister', controller.preRegister);
router.get('/register', controller.register);

module.exports = router;

