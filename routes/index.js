var express = require('express');
var router = express.Router();
let controller = require('../controllers/homeControllers');


router.get('/',controller.index);
router.get('sobrenosotros', controller.sobrenosotros)

module.exports = router;