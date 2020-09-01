console.log('in a ');
// import b from './b.js';
const { b } = require('./b.js');
console.log(b);
function a() {
	console.log('a function');
} 
b();
// export default a;
exports.a = a;

console.log('a end');