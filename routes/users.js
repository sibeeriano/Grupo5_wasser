var express = require('express');
var router = require('.');

let controller = require('../controllers/usersControllers');


router.get('/registro', controller.registro);
router.get('/recuperar', controller.recuperar);
router.get('/iniciarsesion', controller.iniciarsesion);

module.exports=router
