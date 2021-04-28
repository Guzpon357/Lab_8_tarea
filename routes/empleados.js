var express = require('express');
var router = express.Router();

var empleados = require('../controllers/EmpleadoController.js');

router.get('/', empleados.list);
router.get('/show/:id', empleados.show);
router.get('/create', empleados.create);
router.post('/save', empleados.save);
router.get('/edit/:id', empleados.edit);
router.post('/update/:id', empleados.update);
router.post('/delete/:id', empleados.delete);

module.exports = router;
