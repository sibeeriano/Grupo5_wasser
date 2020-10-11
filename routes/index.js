var express = require('express');
var router = express.Router();
const controller = require('../controllers/homeControllers')

router.get('/', controller.index);
router.get('/sobreNosotros', controller.sobreNosotros);

const cookieCheck = require('../middlewares/cookieCheck');
router.get('/', cookieCheck,controller.index);

module.exports = router;