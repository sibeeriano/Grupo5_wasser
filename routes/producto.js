var express = require('express');
var router = express.Router();
const controller = require('../controllers/productoControllers')

const multer = require ('multer');
const path = require ('path');

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/imagenProducto')
    },
    filename:(req,file,callback)=>{
        callback(null,file.fieldname + Date.now()+ path.extname(file.originalname))
    }
})

let upload = multer({storage:storage})



router.get('/',controller.listar);
router.get('/todos',controller.listarTodos);

router.get('/search',controller.search);

router.get('/agregar', controller.agregar);
router.post('/agregar',upload.any(), controller.publicar);

router.get('/EditarProducto/:id', controller.vistaEditar)
router.put('/EditarProducto/:id', upload.any(), controller.guardarEditar)

router.get('/:cat?',controller.categorias);
router.get('/:cat?/:id?',controller.producto);


//router.put('/EditarProducto/:id', upload.any(),controller.guardarEditar)
router.delete('/delete/:id', controller.delete)




module.exports = router