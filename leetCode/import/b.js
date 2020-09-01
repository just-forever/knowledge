console.log('b in');
// import a from './a.js';
const { a } = require('./a.js');
console.log(a);
a();
function b() {
	console.log('a function');
} 

// export default b;
exports.b = b;

// CommonJS模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。
// CommonJS的做法是，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
// http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html