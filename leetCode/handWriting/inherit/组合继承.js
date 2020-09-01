// 组合原型链继承和构造函数继承，就是组合继承。
// 普通属性使用构造函数继承，函数使用原型继承

function Parent(name) {
	console.log(name);
	this.name = name;
	this.colors = ['red', 'green', 'blue'];
}

Parent.prototype.sayName = function() {
	console.log(this.name);
}

function Child(name, age) {
	// 继承属性
	// 第二次调用Parent() ???
	Parent.call(this, name); // 构造函数，继承属性
	this.age = age;
}

// 继承方法
// 构造原型链
// 第一次调用Parent()

Child.prototype = Parent.prototype; // 原型链继承方法

// Child.prototype = Parent.prototype; // 原型链继承方法，这样不行，这样会是同一个地址。

// 既能实现属性的独立，又能做到函数的共享。

// 1、原型链继承,会共享引用属性
// 2、构造函数继承,会独享所有属性,包括引用属性(重点是函数)
// 3、组合继承,利用原型链继承要共享的属性,利用构造函数继承要独享的属性,实现相对完美的继承

const child = new Child('jack', 18);
child.sayName();
// console.log();