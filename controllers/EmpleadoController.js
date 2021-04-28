var mongoose = require('mongoose');
var Empleados = require("../models/Empleados.js");

var empleadosController = {};

empleadosController.list = function(req, res){
    
    Empleados.find({}).exec(function(err, empleados){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/empleados/index', {empleados: empleados,titulo:'INDEX'} );
        
    });
    
};

empleadosController.show = function(req, res){
    Empleados.findOne({_id: req.params.id}).exec(function(err, empleados){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/empleados/show', {empleados: empleados} );
    });
    
};

empleadosController.create = function(req, res){
    res.render('../views/empleados/create');
};

empleadosController.save = function(req, res){
    var empleados = new Empleados( req.body );
    
    empleados.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a producto. :)");
        res.redirect("/empleados/show/"+empleados._id);
        //res.redirect("/usuarios");
    });
};

empleadosController.edit = function(req, res) {
    Empleados.findOne({_id: req.params.id}).exec(function (err, empleados) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/empleados/edit", {empleados: empleados});
    
  });
};

empleadosController.update = function(req, res){
    Empleados.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        estado: req.body.estado,
        sexo:  req.body.sexo,
        especialidad: req.body.especialidad
    }}, { new: true },
    function( err, empleados){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/empleados/edit', {empleados: req.body} );
        }
        
        console.log( empleados );
        
        res.redirect('/empleados/show/' + empleados._id);
        
    });
};

empleadosController.delete = function(req, res){
    
    Empleados.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Empleado deleted!");
        res.redirect("/empleados");
    });
    
};

module.exports = empleadosController;