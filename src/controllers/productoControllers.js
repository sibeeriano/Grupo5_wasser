
const db = require('../database/models')
const dbProducto = require('../data/database')
const fs = require('fs');
const path = require('path');
//const { rawListeners } = require('process');
const { Op } = require("sequelize");


module.exports = {
    listarAdmin: function (req, res) { //vista admin
        db.Products.findAll()
        .then(result => {
            //res.send(result)
            res.render('PRODUCTOS', { 
                productos:result,
                user:req.session.user
            })
        })
        .catch(error => {
            console.log(error)
        })
    },

    listarTodos: function (req, res) { //vista user
        db.Products.findAll()
        .then(result => {
            //res.send(result) //Descomentar esa linea para ver result y los datos que llegan.
            res.render('todosLosProductos', { 
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
        db.Products.findAll({
            where:{
                id : cat
            }
        })
        .then(result => {
        //res.send(result)
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
            })
        })
    },

    publicarpost: function (req, res, next) {//controlador vista
        res.render("agregar",{
            user:req.session.user
        })
},

    publicar: function (req, res, next) {//controlador post
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

    vistaEditar: function (req, res, next) {
        let idProducto = req.params.id;
        db.Products.findAll()
            .then(resultado => {
                res.render('EditarProducto', {
                    title: "Edicion de producto",
                    idProducto: idProducto,
                    dbProducts: resultado,
                    user:req.session.user
                })
            })
            .catch(error => {
                console.log(error);
        })

},

    guardarEditar: function (req, res, next) {
    
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

    delete: (req, res) => {
    let productoborrar = req.params.id;
    
    db.Products.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect('/productos')
},
carrito: function (req, res, next) {//controlador vista
    res.render("carrito",{
        user:req.session.user
    })
},

    search: function (req, res) {
              
        db.Products.findAll({
            where:{
                nombre:{
                    [Op.substring]:req.body.buscar
                }
            }
        })
        .then(resultados=>{
            res.render('resultados', {
                title: "Resultados de la busqueda",
                products: resultados,
                user: req.session.user
                
            })
        })
    }
}




