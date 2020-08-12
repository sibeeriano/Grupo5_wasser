var express = require('express');
var router = express.Router();

/* GET recuperarcontraseñapipi listing. */
router.get('/', function(req, res, next) {
    res.render("recuperar");
});

module.exports = router;