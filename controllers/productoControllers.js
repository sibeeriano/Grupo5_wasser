
const dbProducto = require('../data/database')
const fs = require('fs');
const path = require ('path');
const db = require("../database/models")


module.exports={
    listar:function(req, res){
        res.render('productos',{
            title:"Nuestros productos",
            productos:dbProducto
        });
    },

    listarTodos:function(req, res){
        res.render('todosLosProductos',{
            title:"Nuestros productos",
            productos:dbProducto
        });
    },

    categorias:function(req,res){

        let cat=req.params.cat

        let productos = dbProducto.filter(producto=>{
            return producto.category == cat
        })
       
         res.render('categoria',{
            title: "WASSER",
            productos:productos
        })
    },


    producto: function(req, res) { //detalle de producto
        let id=req.params.id

        let producto = dbProducto.filter((producto) => {
            return id == producto.id});
        
            res.render('producto',{
                producto:producto
        });
    },
       
   
    publicar: function(req,res,next){
        
        
        db.User.findOne({
            where:{
                id:req.session.user.id
            }
            .then(user => {
                db.Products.create({
                    nombre : req.body.nombre.trim(),
                    precio : Number(req.body.precio),
                    descripcion : req.body.descripcion,
                    imagenes : req.files[0].filename

                })
                .then(result =>{
                    console.log(result);
                    res.redirect("/agregar")
                })
                .catch(error =>{
                    res.send(error)
                })
            })
      
    })
},
    
    vistaEditar:function(req,res,next){
        let idProducto = req.params.id;

        res.render('EditarProducto',{
            title:"Edicion de producto",
            idProducto:idProducto,
            dbProducto:dbProducto
        })

    },
     guardarEditar:function(req,res,next){
        let idProducto = req.params.id;
        dbProducto.forEach(function(producto){
            if(producto.id == idProducto){
                producto.id = Number(idProducto);
                producto.name = req.body.name;
                producto.price = req.body.price;
                producto.category = req.body.category;
                producto.description = req.body.description;
                producto.image = (req.files[0]?req.files[0].filename:producto.imagen)
            }
        })
        fs.writeFileSync(path.join(__dirname,"..",'data', "products.json"),JSON.stringify(dbProducto),"utf-8")
        res.redirect('/productos')
    },
    delete: (req,res)=>{
        let productodelete = req.params.id;
        let borrar;
        dbProducto.forEach((producto)=>{
            if(producto.id == productodelete){
                borrar = dbProducto.indexOf(producto)
            }
        })
        dbProducto.splice(borrar,1)
        fs.writeFileSync(path.join(__dirname,"..",'data', "products.json"),JSON.stringify(dbProducto),"utf-8")
        res.redirect('/productos')
    },
    
    search:function(req,res){
        let buscar = req.query.search;
        let resultados=[];
        dbProducto.forEach(producto=>{
            if(producto.name.toLowerCase().includes(buscar.toLowerCase())){
                resultados.push(producto)
            }
        })
        res.render('resultados',{
            title:"Resultado de la busqueda",
            productos:resultados
           
        })
    }
}




