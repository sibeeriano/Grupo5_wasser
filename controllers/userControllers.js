const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let dbUsers = require('../data/dbUsers');
const { validationResult, body } = require('express-validator');
const db = require("../database/models")

module.exports = {
    login: function (req, res) {
        res.render("iniciarsesion", {
            title: "Ingreso de Usuarios",
            user: req.session.user //oct
        });
    },

    processLogin: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Users.findOne({
                where:{
                    email:req.body.email
                }
            })
            .then(user => {
                req.session.user = {
                    id: user.id,
                    nick: user.nombre +  " " + user.apellido,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol
                }
            if (req.body.recordar != undefined) { //agregado el !=undefined
                res.cookie('usuarioWasser', req.session.user, { maxAge: 30000 }) //30 segundos para ver que funcione
            }
            return res.redirect('/')})
        } else {
            return res.render('iniciarsesion', {
                title: "Ingreso de Usuario",
                error: errors.mapped(),
                old: req.body,
                user: req.session.user //agregado octubre
            })
        }

    },

    register: function (req, res) {
        console.log(req.session.store);
        res.render("registro", {
            title: "Registro de Usuario",
            
        })
},
    processRegister: function (req, res) {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            //registrar el usuario si no hay error
            db.Users.create(
                {
                    nombre:req.body.nombre.trim(),
                    apellido:req.body.apellido.trim(),
                    email:req.body.email.trim(),
                    password:bcrypt.hashSync(req.body.pass.trim(),10),
                    avatar:(req.files[0])?req.files[0].filename:"default.png",
                    rol:(req.session.store)?req.session.store:"user"
                }
            )
            .then(result => {
                console.log(result)
                if(req.session.store){
                    req.session.store = result;
                    return res.redirect("/store/registro")
                }
            
                return res.redirect('/users/iniciarsesion');
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


    profile: function (req, res) {
        if (req.session.user) {
            db.Users.findByPk(req.session.user.id)
                .then(user => {
                    res.render('userProfile', {
                        title: "Perfil de Usuario",
                        usuario: user,
                        productos: dbProducts.filter(producto => {
                            return producto.category != "visited" && producto.category != "in-sale"
                        })

                    })
                })
        } else {
            return res.redirect('/')
        }
    },
    updateProfile: function (req, res) {
        db.Users.update(
            {
                fecha: req.body.fecha,
                avatar: (req.files[0]) ? req.files[0].filename : req.session.user.avatar,

            },
            {
                where: {
                    id: req.params.id
                }
            }

        )
            .then(result => {
                console.log(result)
                return res.redirect('/users/profile')
            })
            .catch(errors => {
                console.log(errors)
            })
    },

    cerrarsesion: function (req, res) {
        req.session.destroy();
        if (req.cookies.usuarioWasser) {
            res.cookie('usuarioWasser', '', { maxAge: -1 });
        }
    },


    usuarios:function(req, res) {
        res.render('usuarios', {
            title: "usuarios registrados",
            productos: dbUsers,
            user: req.session.user
        })
    },
delete:function(req, res) {
    let userdelete = req.params.id;
    let borrar;
    dbUsers.forEach((usuario) => {
        if (usuario.id == userdelete) {
            borrar = dbUsers.indexOf(usuario)
        }
    })
    dbUsers.splice(borrar, 1)
    fs.writeFileSync(path.join(__dirname, "..", 'data', "dbUsers.json"), JSON.stringify(dbUsers), "utf-8")
    res.redirect('/')
        //borrar el registro de la base de datos
db.Users.destroy({
    where:{
        id:req.params.id
    }
})
return res.redirect('/')
}
}

