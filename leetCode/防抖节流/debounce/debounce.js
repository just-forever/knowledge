// 1.闭包, 返回一个函数。
// 2.this 指向问题。
// 3.事件处理函数，如何获取对应的获取参数
// 4.第三个参数，立即执行。不用等待时间。
// 5.返回值，返回结果问题。取消防抖操作。
function debounce(func, wait, immedate) {
	let timeout, result;
	let debounce =  function() {
		let context = this;
		let args = arguments;
		clearTimeout(timeout);
		if (immedate) {
			let callNow = !timeout;// 标志值与timeout 相对应.
			timeout = setTimeout(() => {
				timeout = null;
			}, wait);
			if (callNow) {
				result = func.apply(context, args);
			}
			// 立即执行
		} else {
			// 不会立即执行
			timeout = setTimeout(function() {
				func.apply(context, args)
			}, wait);
		}
		return result;
	}

	debounce.cancel = function() {
		clearTimeout(timeout);
		timeout = null;
	}

	return debounce;
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

container.onmousemove = debounce(doSomething, 300, true);