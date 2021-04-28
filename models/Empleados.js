var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    edad: {type: String, required: true, max:2},
    estado: {type: String, required: true, max:2},
    sexo: {type: String, required: true, max:2},
    especialidad: {type: String, required: true, max:50}
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
