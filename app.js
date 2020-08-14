var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require("./routes/index");
var usersRouter = require('./routes/users');
var iniciarsesion = require("./routes/iniciarsesion");
var registro = require("./routes/registro");
var recuperar = require ("./routes/recuperar");
var carrito = require ("./routes/carrito");
var categoria = require ("./routes/categoria")
var producto = require ("./routes/producto")
var catebanio = require ("./routes/catebanio")
var catecocina = require ("./routes/catecocina")
var bachas = require ("./routes/bachas")
var sanitarios = require ("./routes/sanitarios")
var banieras = require ("./routes/banieras")
var accesorios = require ("./routes/accesorios")
var carga = require ("./routes/carga")
var sobrenosotros = require ("./routes/sobrenosotros")



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/iniciarsesion", iniciarsesion)
app.use("/registro", registro)
app.use("/recuperar", recuperar)
app.use("/carrito", carrito);
app.use("/categoria", categoria)
app.use("/producto", producto)
app.use("/catebanio", catebanio)
app.use("/catecocina",catecocina)
app.use("/bachas",bachas)
app.use("/sanitarios",sanitarios)
app.use("/banieras",banieras)
app.use("/accesorios",accesorios)
app.use("/carga",carga)
app.use("/sobrenosotros", sobrenosotros)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
