function Parent() {
	this.parent = 'parent';
	this.getName = function() {
		return 'a'
	}
}

Parent.prototype.getParent = function() {
	return this.parent;
}

function Child() {
	this.child = 'child';
}

// 原型链继承, 创建父的实例，给子构造函数的原型。
Child.prototype = new Parent();

Child.prototype.getChild = function() {
	return this.child;
}

var instance = new Child();
var instance1 = new Child();
console.log(instance.getChild());
console.log(instance.getParent());
console.log(instance1.getName === instance.getName);

// 优点：
// 缺点：多个实例对原型的修改会被篡改，访问会有问题。
// 创建child实例的时候，不能向parent传参