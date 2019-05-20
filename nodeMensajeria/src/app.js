 var bodyParser = require('body-parser');
var cors = require('cors'); 
var express = require('express') 
var configMensaje = require('./configMensaje');
var app = express(); 

var fs = require('fs')
var https = require('https');
app.use(bodyParser.json());
app.use(cors())
app.use(function (req, res, next) {

res.setHeader('Access-Control-Allow-Origin','https://giordanolerena.com:3038');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
	    
	res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
    res.setHeader('Access-Control-Allow-Credentials', true);
	  
	  
    // Pass to next layer of middleware
    next();
});

app.post('/formulario', function (req, res) { 
  configMensaje(req.body);
  res.send('hello world')
})

 
 https.createServer({
   key: fs.readFileSync('serviprynt.com.ar.key') ,
  cert: fs.readFileSync('serviprynt.com.ar.crt') 
}, app)
.listen(3030, function () {
console.log('PEloos!!' )
})