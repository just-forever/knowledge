

// preflight 预检请求 (http://localhost:4000)
// const HTTP = require('http')
// let server = HTTP.createServer((request,response)=>{
//     console.log('CORC Server Recieve Request', "\n Method : " , request.method , "\n Headers : ", request.headers , )
//     // response.writeHead(200,{
//     //     'Content-Type':'text/plain',
//     //     'access-control-allow-origin':"*", /* 允许任何来源 */
//     // })
// 	// response.end('CORS Sever Success Response')
	
// 	if("OPTIONS" == request.method){
//         /** 处理浏览器的预检请求 */
//         response.writeHead(200,{
//             'access-control-allow-methods':'GET,POST,OPTIONS,PUT',
//             'access-control-allow-headers':'Content-Type',
// 			'access-control-allow-origin':"*"
// 			// 'access-control-allow-origin': request.headers['origin'],
//         })
//         response.end('CORS Sever OPTIONS Success Response')
//     }else{
//         response.writeHead(200,{
//             'Content-Type':'text/plain',
// 			'access-control-allow-origin':"*",
// 			'access-control-allow-origin': request.headers['origin'],
//         })
//         response.end('CORS Sever Success Response')
//     }
// })
// server.listen(4000)

// // node 中间件server2.js(http://localhost:4000) 及 nginx反向代理
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



// Websocket
// var io = require('socket.io')(1234);
// io.sockets.on('connection', function (client) {
//     client.on('message', function (msg) { //监听到信息处理
//         console.log('Message Received: ', msg);
//         client.send('服务器收到了信息：' + msg);
//     });
//     client.on("disconnect", function () { //断开处理
//         console.log("client has disconnected");
//     });
// });
// console.log("listen 1234...");