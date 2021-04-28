var express = require('express');
var router = express.Router();

var productos = require('../controllers/ProductoController.js');

router.get('/', productos.list);
router.get('/show/:id', productos.show);
router.get('/create', productos.create);
router.post('/save', productos.save);
router.get('/edit/:id', productos.edit);
router.post('/update/:id', productos.update);
router.post('/delete/:id', productos.delete);

module.exports = router;
