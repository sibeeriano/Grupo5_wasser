var express = require('express');
var router = require('.');

let controller = require('../controllers/productoControllers');


router.get('/:id', controller.producto);
router.get('/carga', controller.carga);
router.get('/carrito', controller.carrito);
router.get('/sobrenosotros', controller.sobrenosotros);



module.exports=router