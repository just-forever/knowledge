function clone(proto) {
	function F() {};
	F.prototype = proto;
	let f = new F();
	f.say = function() {
		console.log('function say');
	}

	return f;
}

// 在原型式继承上做了一些增强，在实例对象上添加引用类型，比如函数，这样实例对象的引用类型无法共享。