var mongoose = require('mongoose');
var Productos = require("../models/Productos.js");

var productosController = {};

productosController.list = function(req, res){
    
    Productos.find({}).exec(function(err, productos){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/productos/index', {productos: productos,titulo:'INDEX'} );
        
    });
    
};

productosController.show = function(req, res){
    Productos.findOne({_id: req.params.id}).exec(function(err, productos){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/productos/show', {productos: productos} );
    });
    
};

productosController.create = function(req, res){
    res.render('../views/productos/create');
};

productosController.save = function(req, res){
    var productos = new Productos( req.body );
    
    productos.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a producto. :)");
        res.redirect("/productos/show/"+productos._id);
        //res.redirect("/usuarios");
    });
};

productosController.edit = function(req, res) {
  Productos.findOne({_id: req.params.id}).exec(function (err, productos) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/productos/edit", {productos: productos});
    
  });
};

productosController.update = function(req, res){
    Productos.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        precio_k: req.body.precio_k,
        marca: req.body.marca,
        calidad: req.body.calidad
    }}, { new: true },
    function( err, productos){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/productos/edit', {productos: req.body} );
        }
        
        console.log( productos );
        
        res.redirect('/productos/show/' + productos._id);
        
    });
};

productosController.delete = function(req, res){
    
    Productos.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Usuario deleted!");
        res.redirect("/productos");
    });
    
};

module.exports = productosController;