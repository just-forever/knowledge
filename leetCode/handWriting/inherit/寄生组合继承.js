// 组合继承有一个会调用父类构造函数两次的缺点

function Parent(name) {
	console.log('Parent');
	this.name = name;
	this.colors = ['blue', 'yellow'];
	// this.sayName = function() {
	// 	console.log(this.name  + '1');
	// }
}

// 为什么函数要在原型上定义，因为方法是想用来公用的，所以单独定义。假如在构造函数内部定义，那么实例化的时候，函数是不一样的。
Parent.prototype.sayName = function() {
	console.log(this.name);
}

function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
}

// 	因为是对父类原型的复制，所以不包含父类的构造函数，也就不会调用两次。
var tmp = Object.create(Parent.prototype);
tmp.constructor = Child; // 修正原型的构造函数。
Child.prototype = tmp; 

Child.prototype.sayAge = function() {
	console.log(this.age);
}

const child1 = new Child('child', 18);
const child2 = new Child('child2', 19);
child1.sayName();
child2.sayName();
console.log(tmp.constructor);