// modulos//
var express = require('express');
var router = express.Router();

// controllers //
const controller = require('../controllers/productoControllers');

// middlewares //

const RecordarUser = require ('../middlewares/recordarUsuarios')
const multerProduct = require('../middlewares/multerProduct')

//rutas//
router.get('/',controller.listarAdmin);
router.get('/todos',controller.listarTodos);

router.post('/search',controller.search);

router.get('/agregar',controller.publicarpost)
router.post('/agregar',multerProduct.any(),RecordarUser,controller.publicar);

router.get('/EditarProducto/:id', RecordarUser,controller.vistaEditar)
router.put('/EditarProducto/:id', multerProduct.any(), RecordarUser,controller.guardarEditar)//Actualizar

router.get('/detalle/:id',controller.producto);
//router.get('/:cat?',controller.categorias);

router.get('/carrito', controller.carrito);



router.delete('/delete/:id',RecordarUser, controller.delete)




module.exports = router