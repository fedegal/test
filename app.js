
/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = module.exports = express();
  require('./config/development.js')(app);
// Configuration
	app.set('port', process.env.PORT || 3000);
	app.engine('dust', require('consolidate').dust);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'dust');
  app.use(bodyParser.urlencoded({
  extended: true
	}));
  
  app.use(express.static(__dirname + '/public'));
  
  
// Routes
app.get('/contacto', routes.contact);
app.get('/ofertas', routes.offers);
app.get('/', routes.index);
app.get('/ayuda', routes.help);
app.get('/slider2-web', routes.slider2_web);
app.get('/carta', routes.menu);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


