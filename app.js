var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require("./routes/index");

var sobrenosotrosRouter = require ("./routes/producto")


var categoriaRouter = require ("./routes/categorias")
var catebanioRouter = require ("./routes/categorias")
var catecocinaRouter = require ("./routes/categorias")
var bachasRouter = require ("./routes/categorias")
var sanitariosRouter = require ("./routes/categorias")
var banierasRouter = require ("./routes/categorias")
var accesoriosRouter = require ("./routes/categorias")

var registro =require('./routes/users')
var iniciarsesion = require("./routes/users");
var recuperar = require ("./routes/users");

var carrito = require ("./routes/producto");
var producto = require ("./routes/producto")
var carga = require ("./routes/producto")




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

app.use("/sobrenosotros", sobrenosotrosRouter)


app.use("/categoria", categoriaRouter);
app.use("/catebanio", catebanioRouter);
app.use("/catecocina",catecocinaRouter)
app.use("/bachas",bachasRouter)
app.use("/sanitarios",sanitariosRouter)
app.use("/banieras",banierasRouter)
app.use("/accesorios",accesoriosRouter)

app.use("/registro", registro);
app.use("/iniciarsesion", iniciarsesion)
app.use("/recuperar", recuperar)

app.use("/carrito", carrito);
app.use("/producto", producto)
app.use("/carga",carga)








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
