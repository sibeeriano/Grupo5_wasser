let db = require("../database/models")

const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult, body } = require('express-validator');


module.exports = {
    login: function (req, res) { //INICIAR SESION
        res.render("iniciarsesion", {
            title: "Ingreso de Usuarios",
            user: req.session.user 
        });
    },

    processLogin: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                        req.session.user = {
                        id: user.id,
                        nick: user.nombre,
                        email: user.email,
                        avatar: user.avatar,
                        rol: user.rol
                        
                    }
                    if (req.body.recordar != undefined) { //agregado el !=undefined
                      res.cookie('usuarioWasser', req.session.user, {maxAge:10})
                    }

                    res.locals.user = req.session.user

                    return res.redirect('/')
                })
        } else {
            return res.render('iniciarsesion', {
                title: "Ingreso de Usuario",
                error: errors.mapped(),
                old: req.body,
                user: req.session.user 
            })
        }

    },

    register: function (req, res) {
            res.render("registro", {
            title: "Registro de Usuario",
            user:req.session.user,
            //

        })
    },
    processRegister: function (req, res) {
         
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            //registrar el usuario si no hay error
            db.User.create(
                {
                    nombre: req.body.nombre.trim(),
                    apellido: req.body.apellido.trim(),
                    email: req.body.email.trim(),
                    password: bcrypt.hashSync(req.body.password, 12 ),
                    avatar: (req.files[0]) ? req.files[0].filename : "default.png",
                    rol: "user"
                }
            )
                .then(result => {
                    console.log(result)
                    return res.redirect('/user/iniciarsesion');
                })
                .catch(errores => {
                    console.log(errores)
                })
        } else {
            res.render("registro", {
                title: "registro de Usuarios",
                errors: errors.mapped(),
                old: req.body,
                user: req.session.user
            })
        }
    },

    perfil: function (req, res) {
        let id = req.params.id;   
        db.User.findOne({where:{ 
            id:id                     
        }}).then(resultado=>{       
            //res.send(resultado)   
        res.render("usuarioperfil", { 
        title: "Mi perfil",            
        user: resultado,            
        id:resultado.id,
        nombre: resultado.nombre,     
        apellido: resultado.apellido, 
        email:resultado.email,
        fecha: resultado.created_at,
        avatar: resultado.avatar,
        rol: resultado.rol,
        user: req.session.user     
        })
        
    })
    },

    
    vistaEditar: function (req, res, next) { //EDITAR USUARIO
        let idUser = req.params.id;      
        db.User.findOne({where:
        {
            id:idUser
        }})
            .then(resultado => {
                res.render('usuarioeditar', {
                    title: "Edicion de perfil",
                    idUser: idUser,
                    dbUser: resultado,
                    user: req.session.user,
                    avatar: resultado.avatar,
                    nombre: resultado.nombre,     
                    apellido: resultado.apellido, 
                    email:resultado.email,
                    
                    
                })
            })
            .catch(error => {
                console.log(error);
        })
    },

    guardarEditar: function (req, res, next) { //GUARDAR EDICION DE EDITAR USUARIO
       
        db.User.update(
            {
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                avatar: (req.files[0]) ? req.files[0].filename : "default.png"
               
            },
            {where:{
                  id: req.params.id
            }},
        )
            .then(result => {
                console.log(result)
                return res.redirect('/user/iniciarsesion');
            })
            .catch(errores => {
                console.log(errores)
            })
    },

    cerrarsesion: function (req, res) {
        req.session.destroy();
        if (req.cookies.usuarioWasser) {
            res.cookie('usuarioWasser', '', { maxAge: -1 });
        }
        res.redirect('/')
    },

    usuarios: function (req, res) {
        db.User.findAll()
        .then(usuarios =>{
            res.render('usuarios', {
                title: "usuarios registrados",
                usuarios: usuarios,
                user: req.session.user
            })
        })
       
    },
    delete: function(req,res){
       
      
        //borrar el registro de la base de datos
        db.User.destroy({
            where:{
                id:req.params.id
            }
        })
        return res.redirect('/user/usuarios')
    }
}

