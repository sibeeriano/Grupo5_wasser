var express = require('express');
var router = express.Router();

/* GET carrito pipi listing. */
router.get('/', function(req, res, next) {
    res.render("sanitarios");
});

module.exports = router;