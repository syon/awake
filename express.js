const express = require("express");
const https = require('https');
const adoc = require('asciidoctor.js')();

const app = express();
app.use(express.static('public'));

var server = app.listen(process.env["PORT"], function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/api/doc/", function(req, response, next){
  const url = req.param('url')
  if (!url) {
    response.send('Invalid Access.');
    return;
  }
  https.get(url, (res) => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', (res) => {
      response.send(adoc.convert(body));
    });
  }).on('error', (e) => {
    console.log(e.message);
  });
});
