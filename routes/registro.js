var express = require('express');
var router = express.Router();

/* GET registrooo listing. */
router.get('/', function(req, res, next) {
    res.render("registro");
});

module.exports = router;