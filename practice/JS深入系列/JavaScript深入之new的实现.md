# 解析new原理

定义
> **new运算符**创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例（MDN）

执行new Foo(...)

```js
1.一个继承Foo原型的对象被创建,即继承自Foo.prototype的对象被创建
2.使用指定参数的调用构造函数Foo,并将this绑定到新创建的对象上。
3.由构造函数返回的对象就是new 表达式的结果.如果表达式没有显式返回一个对象，那么将使用第一步返回的结果。
```

第三点和一个知识有关系。就是寄生构造函数模型，如下。

```js
function Person(name, age, job) {
 var o = new Object();
 o.name = name;
 o.age = age;
 o.job = job;
 o.sayName = function(){
  alert(this.name);
 }
 return o;
}

var friends = new Person('name', 'age', 'job');
friends.sayName();//name
```

这里面，返回的对象与构造函数或者构造函数的原型之间没有关系。构造函数返回的对象与构造函数在外部创建对象没什么不同。

所以fiends的原型是Object.prototype;
