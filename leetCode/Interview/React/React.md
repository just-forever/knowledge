# React Tips

## React组件如何通讯

1、数据流单向，父组件通过props向子组件传递
2、子组件利用回调函数，自定义事件机制向父组件通信。this.props.functionA()
3、跨组件通信，可以一层一层的通过props传递，但是这样嵌套会很深。也可以使用context通信。
4、没有嵌套关系的组件通信 => 使用自定义事件机制

```doc
在componentDidMount事件中, 如果挂载完成，订阅事件。组件卸载时，取消事件订阅。常用的发布/订阅者模式，借用NodeJS中的Events模块的浏览器版实现。
```

## 发布订阅者模式

```doc

```

## JSX本质是什么

什么是语法糖： 语法糖就是一种便捷写法。 相同的数字加号，可以简便成乘号。 y = y + x <=> y += x; 这也是一种语法糖。

看上去像模板语言，但实际上是一种语法糖，换了一种写法的JavaScript

用React.createElement, 产生div, 传className属性，div下所有子节点有多个，分别用React.createElement来创建。

所以说，JSX是以声明的方式，来描述这样一个动态创建的过程，好处在于，开发者完全可以利用JavaScript的语法。

要强调的是 JSX 有一个约定，也是 React 用来区分自定义组件和原生 DOM 节点的一个约定：所有的自定义组件都必须以大写字母开头。他认为小写的tag都是原生的DOM节点，所有大写字母开头的都是自定义组件

Babel 会将JSX转译成为React.createElement()函数来调用。

## context是什么，有何用途

context是上下文。带有Provider(生产者)，和Consumer(消费者)。生产者消费者模式。

## shouldComponentUpdate 的用途， 如何进行性能优化

## 描述redux 单项数据流

## setState是同步还是异步

## 描述diff算法

## 描述hooks

## redux-saga原理

redux-saga使用Generator作为处理非同步问题的主要方案。

>为什么不用async 和 await, 而是选择Generator呢？
【async 和 await的主要机制是promise，他不允许取消正在执行的effect】。使用Generator，可以完全控制效果的执行方式。

那saga如何通过Generator来管理任务？

##【微恋两个问题】

Vue 与 React 的优缺点。

1、react 数据更新是怎么做的，那如果对象改变，数组改变，是怎么做到render更新的。为什么props改变以及state改变会导致这个。

2、Hooks 生命周期中有什么缺点

3、高阶组件融合展示组件和数据组件。高阶组件的缺点，

4、

## 【】

说出项目中比较感兴趣的一个项目

1、React-router 原理

2、浏览器缓存机制

3、http2.0 新增属性

4、重绘和回流

5、手机端适配方案，如果要用px， 有什么方法

6、localStorage, sessionStorage, cookie 的关系

7、http 状态码 204 206的含义、
204： 成功状态响应码，表示请求已经成功了，但是客户端不需要离开当前页面。
206： 成功状态响应码，表示请求已经成功了，主体包含所请求的数据区间，该数据区间是在请求```range```首部指定。

8、浏览器的事件循环机制，以及常见的宏任务，微任务

9、为什么操作dom会影响性能。

10、dva的原理，及 redux-saga的原理，如何表述、

```doc
1、中间件 redux-saga 很重要，因为在内部使用了Generator语法，并且有两个开源框架dva, 和 umi与之相联系。
2、Generator生成器函数，yield暂停标志，每次程序运行到yield时都会暂停，等待下一次的执行。只有执行了next,才会开始调用generator函数，next传入的参数会当做上一个yield表达式的返回值。所以第一次传递的值无效。
3、yield前面的变量拿到的是next传来的参数，而不是yield后面的表达式！
```

11、node 服务端原理。

12、SSR 服务端渲染

13、什么是闭包，闭包好处

14、native JSBridge的原理

15、MQTT 底层协议原理，网络层是哪一层，是长链接吗，服务器负载如何？

16、深浅拷贝原理

17、React 和 Redux 的原理及优劣。

- React props state.整个react没有数据向上回溯的能力，数据只能单向向下分发，或者内部处理。

- Redux 三要素：
a、action是纯声明式的数据结构，只提供事件的所有要素，不提供逻辑。
b、reducer是个匹配函数，修改store状态。
c、store负责存储状态，并可以被react api调用

a. Provider是一个普通组件，可以作为顶层app的分发点，它只需要store属性就可以了。它会将state分发给所有被connect的组件，不管它在哪里，被嵌套多少层。

b. connect是真正的重点，它是一个科里化函数，意思是先接受两个参数（数据绑定mapStateToProps和事件绑定mapDispatchToProps），再接受一个参数（将要绑定的组件本身）

19、JS的精度，为什么0.1 + 0.2 不为 0.3

![avatar](./float.png);
计算机用位来存储和处理数据。
如何用二进制表示0.1？
十进制整数转二进制方法：除二取余；十进制小数转二进制方法：乘2取整。

那么十进制转二进制的过程, 乘2，不能尽。
所以0.1的二进制格式是0.0001100011...。二进制无限循环小数。但计算机内存有限。
所以处理是：

答案：**在某个精度点直接舍弃**， 代价是0.1不是精确的0.1，而是一个有舍入误差的0.1。这也就是0.1 + 0.2不等于0.3的原因。

## tianrang

1、HTTP1.0， 1.1， 2.0的区别

2、描述原型原型链

3、webpack 的属性，相关内容。哪些plugin, 哪些loader.

4、除了dva,UmiJS,还有其他的上层封装吗。

5、canvas使用

6、React16.0 的新属性。 还有react Fiber做了什么事情

7、单线程和多线程的区别，以及JS单线程的好处。
多线程优点：处理能力很强，和单线程相比，成倍数。缺点，多个线程必须独立，容易
单线程优点：易于编程，不需要考虑太多状况。缺点，效率低

8、深拷贝的方式。

9、this的指向，this的生成过程。

10、继承的实现，以及实现继承的多种方式。

11、并发和并行的区别、

12、setState 什么时候是同步的？

在setTimeout中以及原生事件中调用，是可以立马获取到最新的state的。根本原因是因为setState不是真正意义上的异步，只是模拟了异步的行为。

React中会去维护一个标识（isBatchingUpdates），判断是直接更新还是先暂存state进队列。setTimeout以及原生事件都会直接去更新state，因此可以立即得到最新state。而合成事件和React生命周期函数中，是受React控制的，其会将isBatchingUpdates设置为 true，从而走的是类似异步的那一套。

**由React控制的事件处理过程 setState 不会同步更新 this.state！**

**在 React 控制之外的情况， setState 会同步更新 this.state！**

13、hash 的实现方式，实现原理

14、redux-saga reducer同步，effect中只有改变reducer部分是同步吗？

15、React Fiber

在页面元素很多, 需要频繁刷新的情况下，React15 会出现掉帧的情况。

##

1.async await 实现promsie.all promise.race(答foreach 标志位回调)  有没有更好的方法

2.map set weakmap weakset区别

3.cors头部有哪些字段

4.for循环和数组forEach中使用async await有什么区别
for of 和 for循环处理机制和foreach不同。for of内部是通过迭代器的方式去遍历。forEach直接调用回调函数。

5.cookie跨域  ios问题 除了第三方cookie有问题还有ios Safari的cookie问题

6.vue  作用域slot  watch两个字段都改变  不想handler执行两次

7.js有哪些类数组  怎么转为数组  （答es6遍历器）有没有其他的方法

arguments， dom querySelector, getElementByID

(1), Array.prototype.slice.call(a)
(2), Array.from(),
(3), ...(iterator)
(4), 自己写个循环，声明n的空间，去生成数组。

8.promise.race中 当一个promise执行完成，其他的promise还会执行吗

9.小程序为什么建议setData里只执行一个setData

10.对象的深拷贝，function怎么复制

11.jsbridge的优化？
