// 使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类，不使用原型。

function Parent() {
	this.color = ['red', 'green', 'blue'];
	this.getName = function() {
		console.log('a');
		return 'a';
	},
	this.a = {
		b: 'b'
	},
	this.b = 'b'
}

Parent.prototype.getValue = function() {
	console.log('getValue');
}

function Child() {
	// 继承自Parent
	Parent.call(this);
	// 子类里面执行父类的构造函数，相当于把父类的代码复制到子类里面执行一遍
	// 另一个好处是可以给父类传参
}

var instance1 = new Child();
instance1.color.push('black');
// instance1.getName();
// instance1.getValue();
console.log(instance1.color);

var instance2 = new Child();
console.log(instance2.color);
console.log(instance2.a === instance1.a); // false

// 核心代码是Parent.call(this),创建子类实例时调用Parent构造函数，于是子类的每个实例都会将Parent中的属性复制一份。

// 缺点：1、只能继承父类的实例属性和方法，不能继承原型属性和方法
// 2、父类的方法没有被共享，造成内存浪费。

// 基本类型判断相等是直接相等，对象类型是判断是否是同一个地址。

// 虽然构造函数解决了引用类型被所有实例共享的问题，但也导致，每实例化一个子类，就复制了一段代码。函数也不共享！！！

