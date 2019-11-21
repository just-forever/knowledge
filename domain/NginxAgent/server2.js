// server2.js(http://localhost:4000)
// /usr/local/etc/nginx/nginx.conf
// nginx -s reload
// ps -ef|grep nginx
// sudo pkill -9 nginx
const http = require('http');
const data = {
	title: 'this is a server',
	password: '123456'
};
const server = http.createServer((request, response) => {
	if (request.url === '/') {
		response.end(JSON.stringify(data));
	}
});
server.listen(4000, () => {
	console.log('The server is running at http://localhost:4000');
});
