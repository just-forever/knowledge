// setTimeout  和 setInterval 可能没那么简单
// var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
// arg1, ..., argN 作为附加参数，一旦定时器到期，它们会作为参数传递给function.

// var a = setInterval(() => {}, 1000);
// clearInterval(a);
// console.log('a', a); a的实体是什么

function fn1() {
	for (var i = 0; i < 4; i++) {
		var tc = setTimeout(
			function(i) {
				console.log(i);
				console.log(tc);
				clearTimeout(tc);
			},
			10,
			i
		);
	}
}
// tc 不作为闭包参数传入的情况下，在i = 3的时候，tc就是最后一个定时器的编号值。执行第一个的时候，会清楚最后一个定时器的编号。所以 3 不会输出。
// 实际上tc 是最后一个定时器的tc.
// 假如tc作为参数传入，那么可以输出3。实际上清楚

function fn2() {
	for (var i = 0; i < 4; i++) {
		var tc = setInterval(
			function(i, tc) {
				console.log(i);
				// console.log(tc);
				clearInterval(tc);
			},
			3000,
			i,
			tc
		);
	}
	clearInterval(tc); // 此处加会把3 给清除了， 输出0 ，1，2。同时有会输出0，1，2，2，2，2
}
// 第一个传入的为undefined，所以实际上是下一个把上一个给清空了，所以在i = 3的时候前面的0 ，1，2 没了，3还在，后面会循环输出3.

// fn1(); 	// 输出 0，1，2
fn2();  
// 输出 0，1，2，3
