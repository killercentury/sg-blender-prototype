var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/dist'));

app.all('/*', function (req, res) {
	res.sendFile('dist/index.html', { root: __dirname });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});
