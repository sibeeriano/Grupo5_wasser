var express = require('express');
var router = require('.');

let controller = require('../controllers/categoriasControllers');


router.get('/categoria', controller.categoria);
router.get('/catebanio', controller.catebanio);
router.get('/catecocina', controller.catecocina);
router.get('/banieras', controller.banieras);
router.get('/bachas', controller.bachas);
router.get('/accesorios', controller.accesorios);
router.get('/sanitarios', controller.sanitarios);


module.exports=router