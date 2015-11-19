var express = require('express');
var app = express();
var router = express.Router();

// var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
// require('./filters')(swig);
var path = require('path');
module.exports = app;

//swig stuff--------------------------------------
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
//------------------------------------------------

app.get("/", function(req,res){
	res.render("index")
})

app.post("/", function(req,res){
	res.send("Thanks. Your homework is completed and sent to your professor.")
})

app.listen(3000, function(){
	console.log("listening on port 3000")
})