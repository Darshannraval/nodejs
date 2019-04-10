var http=require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Darshan Raval. Hope you are doing good...!!! Thanks for creating CI/CD pipeline');
}).listen(8080);
