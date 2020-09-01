// 定义一个类

function SingleTon(name) {
	this.name = name;
	this.instance = null;
}

// 原型扩展类的一个方法
SingleTon.prototype.getName = function() {
	console.log(this.name);
}

// 获取类的实例

SingleTon.getInstance = function(name) {
	if (!this.instance) {
		this.instance = new SingleTon(name);
	}

	return this.instance;
}

var a = SingleTon.getInstance('a');

var b = SingleTon.getInstance('b');
console.log(b);
console.log(a == b);

