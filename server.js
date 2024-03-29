var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log("Mini store on port 8000");
})