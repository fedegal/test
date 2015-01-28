/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
},

exports.help = function (req, res){
	res.render('help/index');
},
 
exports.slider2_web = function (req, res){
	res.render('slider2-web');
},
exports.offers = function (req, res){
	res.render('offers');
},
exports.menu = function (req, res){
	res.render('menu');
},
exports.contact = function (req, res){
	res.render('contact');
}