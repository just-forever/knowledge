# JS原型及原型链

构造函数、实例、原型

```javascript
function Person(){};
var person = new Person();
```

## prototype

每一个函数都有一个prototype属性, 但是实例的typeof为object,不存在prototype. 这是函数才会有的属性。

什么是原型？

```js
每一个js对象（null除外）在创建的时候就会与之关联另一个对象，这个对象就是原型。每一个对象都会从原型‘继承’属性
```

## __proto__

每一个js对象（null除外）都具有一个属性，__proto__， 这个属性会指向对象的原型。

构造函数： Person();
实例： person。
原型： person.__proto__ 和 Person.prototype。

实例的__proto__和构造函数的prototype均指向原型。

那原型的什么是指向实例或者构造函数的呢？？？

## constructor

原型指向实例是没有的，why？ 因为一个构造函数可以生成很多的实例，那，生成这么多，原型如何知道指向哪一个实例？？？

但是，原型指向构造函数是有的，这就是第三个属性，constructor。每一个原型都有一个constructor属性指向相关联的构造函数。

```js
function Person() {

}
console.log(Person === Person.prototype.constructor); //true
```

三个概念了解之后， 了解一下原型和实例的关系。 我们知道这两个没有指向关系，那有什么关系？

## 原型和实例

当读取实例的属性时，如果找不到就会查找与对象关联的原型中的属性。如果还查不到，就去找原型的原型，直到找到顶层为止，这就是原型链。

```js
function Person() {

}

Person.prototype.name = 'name';

var person = new Person();

person.name = 'name of this person';
console.log(person.name) // name of this person

delete person.name;
console.log(person.name) // name
```

那原型的原型又是什么呢？
既然原型是一个对象，既然是对象，就可以用最原始的方式创建

```js
var obj = new Object();
obj.name = 'name';
console.log(obj.name)//name
```

所以原型对象就是通过Object构造函数生成的。

再来一次，构造函数Object()，原型Object.prototype, 然后其他构造函数的原型的原型就是，Object.prototype， Object.prototype.constructor === Object();

一路走下来就是一个原型链。

那 Object.prototype的原型是什么呢？

null. 就是null，所以查到Object.prototype就可以停止查找了。

## 需要注意的constructor和__proto__

```js
function Person() {

}
var person = new Person();
console.log(person.constructor === Person); // true
```

当获取实例的constructor的时候， 其实person实例中并没有constructor属性，当不能获取到constructor属性的时候，就会从person的原型中读取，正好该原型中有这属性，所以得到以下结论

```js
person.constructor === Person.prototype.constructor
```

其次是__proto__,绝大多数浏览器都支持这个非标准的方法访问原型，然而这个方法并不存在于Person.prototype中，虽然Person.prototype也有这个方法，但实际上，他是来自于Object.prototype。

与其说是一个属性，不如说是一个getter/setter?? 什么意思？

## 更新一个有意思的构造函数，叫Function

看一下Function，自己是真的理解了这个函数吗？？

首先它是一个构造函数，是用来生成函数的构造函数。而我们常见的String(),Number(),Boolen()这些函数就是Function构造出来的，new出来的实例。

有一个疑问？ typeof String， 是'function'，但所有的实例都是对象，那function是对象吗？

>MDN这样介绍：在JS中，函数是头等对象。因为他可以像任何其他对象一样具有属性和方法，他们与其他对象的区别就在于函数可以被调用，所以他们是Function对象。
>>不推荐使用 Function 构造函数创建函数,因为它需要的函数体作为字符串可能会阻止一些JS引擎优化,也会引起其他问题。

new构造函数，也是函数表达式，但该用法不推荐，这种语法会导致解析两次代码：第一次解析常规的ECMAScript代码，第二次解析传入构造函数的字符串，影响性能。使用Function构造函数，构造函数可以接收任意数量的参数，但最后一个参数始终是函数体。

```js
var sum=new Function('num1','num2','return num1+num2;');
sum;
//ƒ anonymous(num1,num2
//) {
//return num1+num2;
//}
```

当使用不带圆括号的函数名是访问函数指针，而非调用函数。

```js
console.log(Function instanceof Object); // true
console.log(Object instanceof Function); // true
```

第一个用函数的定义来说,(javascript中函数实际也是一个函数对象),当然为true,那第二个呢?对象也是函数?

Object也是函数.因为Object的结构是function Object(){native code}.

这种形式,很清晰的就是声明的一个Object函数,当然就是函数了,所以两个都是为true.

 第一个用函数的定义来说,(javascript中函数实际也是一个函数对象),当然为true,那第二个呢?对象也是函数?

Object也是函数.因为Object的结构是function Object(){native code}.

这种形式,很清晰的就是声明的一个Object函数,当然就是函数了,所以两个都是为true.

但

```js
Object.__proto__===Function.prototype;//true,这个毫无异议，我支持啊;
Function.__proto__===Object.prototype;//false,这个怎么解释，难道‘Function instanceof Object’仅仅只是一个概念上的骗局？
```

如何解释？？

首先，JS的基础就是Object,JS里面一切都是继承自Object（除了原型链顶端的null）。不停强化这个概念 Object 是夏娃，js 的子子孙孙都是她生的。

### 先说instanceof

A instanceof B 是在A的原型链里查找B的constructor，找到返回true, 找不到返回false.

### 再说 Function instanceof Object

一切都是继承自Object的，Function是一个对象，所以Function instanceof Object === true.

### 接着说Object instanceof Function

1.任何一个function(){}都是Function对象的实例，自然(function(){}) instanceof Function 的值都是 true。
2.Object自身是一个构造函数，没错，是函数，函数都是继承自Function，所以 Object instanceof Function === true。

### 最后说__proto__

根据定义，__proto__是对象(Object)的原型(prototype)的构造函数(constructor)引用

在JS设计的过程中，Object 的 __proto__ 很神奇地指向了 Function.prototype。

所以

```js
Object.__proto__ === Function.prototype; // true
Object.__proto__ == Object.prototype; // false
```

而 Function.__proto__ 自然而然不等于 Object.prototype。

但是

```js
Function.prototype.__proto__ === Object.prototype; // true
```

好绕啊！！！

ES规范这样说： 
>Function本身就是函数，Function.__proto__是标准的内置对象Function.prototype。
Function.prototype.__proto__是标准的内置对象Object.prototype。

```js
Function.prototype和Function.__proto__都指向Function.prototype，这就是鸡和蛋的问题怎么出现的。
Object.prototype.__proto__ === null，说明原型链到Object.prototype终止。
https://github.com/creeperyang/blog/issues/9
```
