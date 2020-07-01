
/*const express = require('express');
const fs = require('fs');

// Constants
const PORT = 443;
const app = express();


app.get("/",function(req,res){
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT);
console.log(`Running on http://:${PORT}`);
*/
var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()
//var privateKey  = fs.readFileSync(`server.key`, 'utf8');
//var certificate = fs.readFileSync(`server.crt`, 'utf8');
//var credentials = {key: privateKey, cert: certificate};

const PORT = 3000;

//var httpServer = https.createServer(app);
//var httpsServer = https.createServer(credentials, app);

app.get("/",function(req,res){
  res.sendFile(`${__dirname}/index.html`);
  console.log(`${__dirname}`);
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
  //requestCert: false,
  //rejectUnauthorized: false
}, app).listen(PORT, () => {
  console.log(`Running on http://:${PORT}`);
})
//app.listen(PORT);
//httpsServer.listen(80);

