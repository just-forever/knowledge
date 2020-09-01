// JS是静态作用域
// JS查找是按照书写时候的位置来决定的,而不是按照调用时的位置来确定的。
// 所以在调用showName时，他的上级是全局作用域，会去查找全局作用域下的name。

// 调用changeName()时,找到这个函数
// 定义var name = "Jay"
// 调用showName()
// 在changeName()里面查找是否有showName()这个方法,发现没有,向外层查找,找到了、
// 调用console.log(name),在函数内部查找有没有name,没有,向外查找,找到了,name="Mike"
// 输出Mike

var name = 'Mike';

function showName() {
	console.log(name);
}

function changeName() {
	var name = 'Jay';
	showName();
}

changeName();

// 红宝书：闭包指的是有权访问另一个函数作用域中的变量的函数。
// 小黄书：当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。