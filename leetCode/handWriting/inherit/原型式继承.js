// 首先创建一个空的构造函数F，然后将F的的原型指向proto,返回一个实例对象，完成继承。
// 和原型链继承有相同的问题： 引用属性共享
// 区别： clone函数接收的对象不一定是构造函数，也可以是其他任何对象。

function clone(proto) {
	function F(){};
	F.prototype = proto;
	return new F();
}

// es5的Object.create()函数，就是基于原型式继承的
