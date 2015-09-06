var express = require('express');
var app = express();
var path = require('path')
var babel = require('babel')
var parser = require('body-parser')
var converter = require('./routes/converter')
var fs = require('fs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(parser());

app.post('/save',function(req,res){
  var filename = __dirname + '/public/data/store.json'
  req.accepts('json')
  fs.readFile(filename,function(err,data){
    if (err) throw err
    data = JSON.parse(data)
    if (data.constructor != Array) data = []
    data.push(req.body)
    data = JSON.stringify(data)
    fs.writeFile('public/data/store.json',data)
    res.status(200).end()
  })
})


var server = app.listen(3000, 'localhost',function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});

