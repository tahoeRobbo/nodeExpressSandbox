var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('default', {
		title : 'home',
		users : ['Rob', 'BNpm','Roofus'],
		classname : 'home'
	});
});

app.get('/about', function(req, res) {
	res.render('default', {
		title : 'About Us',
		classname : 'about'
	});
});


app.get('*', function(req, res) {
	res.send('Bad Route!');
});

var server = app.listen(3000, function() {
	console.log('listening on port 3000');
});