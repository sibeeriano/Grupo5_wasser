var express = require('express');
var router = express.Router();
const controller = require('../controllers/userControllers')

router.get('/registrarse', controller.register);
router.get('/iniciarsesion', controller.iniciarsesion);

module.exports = router;