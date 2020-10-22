var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require("method-override") ;

var session = require("express-session")
var cookieCheck = require('./middlewares/cookieCheck');//agregado octubre

var indexRouter = require('./routes/index');
var productosRouter = require('./routes/producto');
var userRouter = require ('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(methodOverride('_method'));
app.use(session({secret:"Wasser"}));
app.use(cookieCheck); //agregado octubre

app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/user', userRouter);


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
