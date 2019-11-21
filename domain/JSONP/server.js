// server2.js(http://localhost:4000)
const http = require('http');
const Url = require('url');

const server = http.createServer(function(req, res) {
	var path = req.url;
	var params = parseUrl(Url.parse(path).query);
	var data = { name: 'swl', age: 20 };
	var script = params.func + '(' + JSON.stringify(data) + ')';
	res.write(script);
	res.end();
});

//解析url
function parseUrl(url) {
	var obj = {};
	var urls = url.split('&');
	for (var key in urls) {
		var keyVal = urls[key].split('=');
		obj[keyVal[0]] = keyVal[1];
	}
	return obj;
}
server.listen(4000, () => {
	console.log('The server is running at http://localhost:4000');
});
