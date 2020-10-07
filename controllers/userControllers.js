const fs = require('fs');
const path = require('path');
const bcrypt =require('bcrypt');
let dbUsers = require('../data/dbUsers');
const {validationResult, body} = require('express-validator');

module.exports={
    login:function(req,res){
        res.render("iniciarsesion",{
            title: "Ingreso de Usuarios",
            user:req.session.user //oct
        });
    },

    processLogin:function(req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
            dbUsers.forEach(usuarioWasser =>{
                if(usuarioWasser.email == req.body.email){
                    req.session.user = {
                        id:usuarioWasser.id,
                        nik: usuarioWasser.nombre, //cambie nombre por nik
                        apellido: usuarioWasser.apellido,
                        rol:usuarioWasser.rol,
                        email: usuarioWasser.email,
                        avatar:usuarioWasser.avatar //agregado avatar
                    }
                }
            })
            if(req.body.recordar != undefined){ //agregado el !=undefined
                res.cookie('usuarioWasser',req.session.user,{maxAge:30000}) //30 segundos para ver que funcione
            }            
            return res.redirect('/')
        }else{
            return res.render('iniciarsesion',{
                title:"Ingreso de Usuario",
                error: errors.mapped(),
                old:req.body,
                user:req.session.user //agregado octubre
            })
        }

    },

    register:function(req,res){
     res.render("registro", {
         title:"Registro de Usuario",
         user: req.session.user         
    })
       
    },
    processRegister:function(req,res){
    
       let errors = validationResult(req);
       let lastID = 0;
       if(dbUsers.length > 0){
           dbUsers.forEach(user=>{
               if(user.id > lastID){
                   lastID = user.id
               }
           })
       }
    

       if(errors.isEmpty()){
            //registrar el usuario si no hay error
        let nuevoUsuario = {
            id:lastID+1,
            nombre:(req.body.nombre).trim(),
            apellido:(req.body.apellido).trim(),
            email:(req.body.email).trim(),
            avatar:(req.files[0])?req.files[0].filename:"default.png",
            password:bcrypt.hashSync(req.body.password,10),
            rol:"user"
        }
        dbUsers.push(nuevoUsuario);

        fs.writeFileSync(path.join(__dirname,"..","data","dbUsers.json"),JSON.stringify(dbUsers),"utf-8")
        return res.redirect("/user/iniciarsesion")  
    }else{
            res.render("registro",{
                title: "registro de Usuarios",
                errors:errors.mapped(),
                old:req.body,
                user:req.session.user
            })
        }
    },
    
    
     
    

  /*  profile:function(req,res){
        res.render("userProfile",{
            title:"Perfil del Usuario",
    
            
            productos: db.product.filter(producto=>{
                return producto.category != "visited" && producto.category != "in-sale"
            })
        })

        
    },*/

    cerrarsesion:function(req,res){
        req.session.destroy();
        if(req.cookies.usuarioWasser){
            res.cookie('usuarioWasser','',{maxAge:16})
        }
        res.redirect('/')
    },
    usuarios:function(req, res){
        res.render('usuarios',{
            title:"usuarios registrados",
            productos: dbUsers,
            user:req.session.user
        });
    },
    delete: (req,res)=>{
        let userdelete = req.params.id;
        let borrar;
        dbUsers.forEach((usuario)=>{
            if(usuario.id == userdelete){
                borrar = dbUsers.indexOf(usuario)
            }
        })
        dbUsers.splice(borrar,1)
        fs.writeFileSync(path.join(__dirname,"..",'data', "dbUsers.json"),JSON.stringify(dbUsers),"utf-8")
        res.redirect('/user/usuarios')
    },
}

