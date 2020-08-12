var express = require('express');
var router = express.Router();

/* GET iniciar sesion listing. */
router.get('/', function(req, res, next) {
    res.render("iniciarsesion");
});

module.exports = router;
