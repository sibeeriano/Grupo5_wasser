
const dbProducto = require('../data/database')
const fs = require('fs');
const path = require ('path');


module.exports={
    listar:function(req, res){
        res.render('productos',{
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

    agregar:function(req,res){       
        res.render('agregar',{
        title:"Agregar Producto",
            
            })
    },

    publicar: function(req,res,next){
    
        let lastID= 1;

        dbProducto.forEach(producto => {
            if(producto.id > lastID){
                lastID = producto.id
            }            
        });
    
        

        let newProduct ={
            id: lastID + 1,
            name: req.body.name.trim(),
            colors: req.body.color,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: (req.files[0])?req.files[0].filename:"default-image.png" //NO FUNCIONA
            }

            dbProducto.push(newProduct);

            fs.writeFileSync(path.join(__dirname,"..",'data', "products.json"),JSON.stringify(dbProducto),"utf-8")
            
            res.redirect('/productos')
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
    }
    
}





         /*
         let cocina = dbProducto.filter(producto => {
           return producto.category == "cocina"
         })
         let bachas = dbProducto.filter(producto => {
         return producto.category== "bachas"
         })
         let sanitarios = dbProducto.filter(producto => {
         return producto.category== "sanitarios"
         })
        let bañeras = dbProducto.filter(producto => {
         return producto.category== "bañeras"
         })
        let accesorios = dbProducto.filter(producto => {
         return producto.category== "accesorios"
         })*/

         
           /*
           cocina: cocina,
           bachas: bachas,
           sanitarios: sanitarios,
           bañeras: bañeras,
           accesorios: accesorios
*/
