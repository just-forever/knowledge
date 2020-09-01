// 使用时间戳，定时器。
// 不顾头 顾尾
// function throttle(func, wait) {
// 	let context, args;
// 	// 之前的时间戳。
// 	let old = 0;
// 	return function() {
// 		context = this;
// 		args = arguments;
// 		// 获取当前的时间戳
// 		let now = new Date().valueOf();
// 		if (now - old > wait) {
// 			// 立即执行
// 			func.apply(context, args);
// 			old = now;
// 		}
// 	}
// }、、

//第一次不会触发，最后一次触发
// 不顾头，顾尾
function throttle(func, wait) {
	let context, args, timeout;
	// 之前的时间戳。
	return function() {
		context = this;
		args = arguments;
		
		if (!timeout) {
			// 立即执行
			timeout = setTimeout(() => {
				timeout = null;
				func.apply(context, args);
			}, wait)
		}
	}
}


let count = 0;
let container = document.querySelector('#container')
let btn = document.querySelector('#btn');

function doSomething(e) {
	container.innerHTML = count++;
	return '想要的结果';
}

btn.onClick = function() {
	doSomething.cancel();
}

container.onmousemove = throttle(doSomething, 1000, {
	leading: false,
	trailing: false
	// 这两个不能同时为false
});