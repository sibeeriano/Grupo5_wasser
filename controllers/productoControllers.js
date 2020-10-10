
const dbProducto = require('../data/database')
const fs = require('fs');
const path = require('path');
const db = require("../database/models")


module.exports = {
    listar: function (req, res) {
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

    listarTodos: function (req, res) {
        res.render('todosLosProductos', {
            title: "Nuestros productos",
            productos: dbProducto
        });
    },

    categorias: function (req, res) {

        let cat = req.params.cat

        let productos = dbProducto.filter(producto => {
            return producto.category == cat
        })

        res.render('categoria', {
            title: "WASSER",
            productos: productos
        })
    },


    producto: function (req, res) { //detalle de producto
        let id = req.params.id;


         db.Products.findOne({
            where:{
                id:id
            }

        })
        .then(resultado =>{
            //res.send(resultado)// Descomentar linea para ver como llega producto
            res.render("producto", {
                id: id,
                producto: resultado,
                user:req.session.user
            })
        })
    },


    publicar: function (req, res, next) {

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
                res.redirect("/")
            })
            .catch(error => {
                res.send(error)
            })



    },






    publicarpost: function (req, res, next) {

        res.render("agregar")
},










vistaEditar: function(req, res, next) {
    let idProducto = req.params.id;

    res.render('EditarProducto', {
        title: "Edicion de producto",
        idProducto: idProducto,
        dbProducto: dbProducto
    })

},
guardarEditar: function(req, res, next) {
    let idProducto = req.params.id;
    dbProducto.forEach(function (producto) {
        if (producto.id == idProducto) {
            producto.id = Number(idProducto);
            producto.name = req.body.name;
            producto.price = req.body.price;
            producto.category = req.body.category;
            producto.description = req.body.description;
            producto.image = (req.files[0] ? req.files[0].filename : producto.imagen)
        }
    })
    fs.writeFileSync(path.join(__dirname, "..", 'data', "products.json"), JSON.stringify(dbProducto), "utf-8")
    res.redirect('/productos')
},
delete: (req, res) => {
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
},

    search: function(req, res) {
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
    }
}




