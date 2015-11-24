var express = require('express');
var app = express();
var router = express.Router();

// var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
// require('./filters')(swig);
var path = require('path');
module.exports = app;

app.set("port", (process.env.PORT || 3000));

//swig stuff--------------------------------------
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

//------------------------------------------------

app.use('/public', express.static(__dirname + '/public'));


app.get("/", function(req,res){
	res.render("index")
})

app.post("/", function(req,res){
	res.render("success")
	// ("/public/success.jpg")
})

app.listen(app.get("port"), function(){
	console.log("listening on port "+ app.get("port"));
})