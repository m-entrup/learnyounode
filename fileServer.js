var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var file = String(process.argv[3]);

var server = http.createServer(function (req, res) {
  var src = fs.createReadStream(file);
  // console.log(src);
  src.pipe(res);
})

server.listen(port);

/* Alternative:
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
