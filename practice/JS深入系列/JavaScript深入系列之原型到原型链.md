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
