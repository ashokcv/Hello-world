var http = require('http');
url = require('url');
http.createServer(function (req, res) {
  var _get = url.parse(req.url,true).query;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Here is :\n'+_get['data']);
res.end('Here is :\n'+_get['data']);
}).listen(1338, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1338/');
