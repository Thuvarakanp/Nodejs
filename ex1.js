var http = require('http');
var dt = require('./sumandavg');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Total: " + dt.sum(123,321));
    res.end();
}).listen(8080);
