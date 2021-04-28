var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    precio_k: {type: String, required: true, max: 20},
    marca: {type: String, required: true},
    calidad: {type: String, required: true, max:2}
});

module.exports = mongoose.model('Productos', ProductoSchema);
