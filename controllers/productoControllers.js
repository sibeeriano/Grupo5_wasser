
const db = require("../database/models")
    const dbProducto = require('../data/database')
const fs = require('fs');
const path = require('path');
//const { rawListeners } = require('process');


module.exports = {
    listarAdmin: function (req, res) { //vista admin
        db.Products.findAll()
        .then(result => {

            //res.send(result)/ //Descomentar esa linea para ver result y los datos que llegan.
            res.render('PRODUCTOS', { //renderizo en el navegador la vista index que contiene el HOME del sitio
                productos:result,
                user:req.session.user
            })
        })
        .catch(error => {
            console.log(error)
        })
    },

    listarTodos: function (req, res) { //vista usuarios general
        db.Products.findAll()
        .then(result => {
            //res.send(result) //Descomentar esa linea para ver result y los datos que llegan.
            res.render('todosLosProductos', { //renderizo en el navegador la vista index que contiene el HOME del sitio
                productos:result,
                user:req.session.user
            })
        })
        .catch(error => {
            res.send(error)
        })
    },

    categorias: function (req, res) {

        let cat = req.params.cat;

        db.Products.findOne({
            where:{
                id : cat
            }
        })
            
            .then(result => {
                res.send(result)
        res.render('categoria', {
            title: "WASSER",
            user:req.session.user

        })
    })

  },

  

//logica del producto
    producto: function (req, res) { //detalle de producto
        let id = req.params.id;
         db.Products.findOne({
            where:{
                id:id
            }
        })
        .then(resultado =>{
           
            res.render("producto", {
                id: id,
                producto: resultado,
                user:req.session.user,
                productos: resultado
            })
        })
    },

    publicarpost: function (req, res, next) {//controlador vista

        res.render("agregar")
},

    publicar: function (req, res, next) {//controlador post

        /*db.Products.findAll()
        .then (result =>{
            res.send(result)
        })*/

        db.Products.create({
            id: db.Products.id,
            nombre: req.body.nombre,
            precio: Number(req.body.precio),
            descripcion: req.body.descripcion,
            imagenes : (req.files[0])?req.files[0].filename:"default-image.png",

        })
            .then(result => {

                //console.log(req.files);
                res.redirect("/productos")
            })
            .catch(error => {
                res.send(error)
            })



    },




/*vistaEditar: function(req, res, next) {
    let idProducto = req.params.id;

    res.render('EditarProducto', {
        title: "Edicion de producto",
        idProducto: idProducto,
        dbProducto: dbProducto
    })*/
    vistaEditar: function (req, res, next) {
        let idProducto = req.params.id;
        db.Products.findAll()
            .then(resultado => {
                res.render('EditarProducto', {
                    title: "Edicion de producto",
                    idProducto: idProducto,
                    dbProducts: resultado,
                    user: req.session.user
                })
            })
            .catch(error => {
                console.log(error);
        })

},

guardarEditar: function (req, res, next) {
    /*  let idProducto = req.params.id;
     dbProducto.forEach(function (producto) {
         if (producto.id == idProducto) {
             producto.id = Number(idProducto);
             producto.nombre = req.body.nombre;
             producto.precio = Number(req.body.precio);
             producto.descuento = Number(req.body.descuento);
             producto.categoriaProducto = req.body.categoriaProducto;
             producto.descripcion = req.body.descripcion;
             producto.imagen = (req.files[0] ? req.files[0].filename : producto.imagen)
         }
     })
     fs.writeFileSync(path.join(__dirname, '..', 'data', 'productosDataBase.json'), JSON.stringify(dbProducto), 'utf-8') */
     db.Products.update({
         nombre : req.body.nombre,
         precio : Number(req.body.precio),
         id_categoria : req.body.id_categoria,
         descripcion : req.body.descripcion,
         imagenes : (req.files[0] ? req.files[0].filename : req.session.user.imagen)
     },{
         where:{
             id:req.params.id
         }
     })
     .then(result=>{
         res.redirect('/productos')
     })
     .catch(errores=>{
         console.log(errores)
     })
     
 },
/*delete: (req, res) => {
    let productodelete = req.params.id;
    let borrar;
    dbProducto.forEach((producto) => {
        if (producto.id == productodelete) {
            borrar = dbProducto.indexOf(producto)
        }
    })
    dbProducto.splice(borrar, 1)
    fs.writeFileSync(path.join(__dirname, "..", 'data', "products.json"), JSON.stringify(dbProducto), "utf-8")
    res.redirect('/productos')
},*/
delete: (req, res) => {
    let productoborrar = req.params.id;
    /* let borrar;
    dbProducto.forEach((producto) => {
        if (producto.id == productodelete) {
            borrar = dbProducto.indexOf(producto)
        }
    })
    dbProducto.splice(borrar, 1)
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'productosDataBase.json'), JSON.stringify(dbProducto), 'utf-8') */
    db.Products.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect('/productos')
},



    /*search: function(req, res) {
        let buscar = req.query.search;
        let resultados = [];
        dbProducto.forEach(producto => {
            if (producto.name.toLowerCase().includes(buscar.toLowerCase())) {
                resultados.push(producto)
            }
        })
        res.render('resultados', {
            title: "Resultado de la busqueda",
            productos: resultados

        })
    }*/
    search: function (req, res) {
        /* let buscar = req.query.buscar;
        let resultados = [];
        dbProducto.forEach(function (producto) {
            if (producto.nombre.toLowerCase().includes(buscar.toLowerCase())) {
                resultados.push(producto)
            }
        })
        res.render('productos', {
            title: "Resultados de la busqueda",
            dbProducto: resultados,
            user: req.session.user
        }) */
        
        db.Products.findAll({
            where:{
                nombre:{
                    [Op.substring]:req.query.buscar
                }
            }
        })
        .then(resultado=>{
            res.render('resultados', {
                title: "Resultados de la busqueda",
                dbProducts: resultado,
                user: req.session.user
            })
        })
    }
}




