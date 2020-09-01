# React

[redux-saga]https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/understanding-redux-saga-148d7f070fa

## 数据分发

本质分析：

数据驱动视图，数据有更新的时候，在进入渲染之前，会先生成virtual Dom, 前后对比，有变化才进行真正的渲染。 所以， react 和 vue这一点一致。不是回答到的高阶组件。

数据驱动视图两种方式，一种是state变化， 一种是props变化。

## react-saga

1. redux-saga如何通过generator管理任务

```js
import axios from "axios";

function runner(genFn) {
  const itr = genFn();

  function next(arg) {
    let result = itr.next(arg);

    if (result.done) {
      return arg;
    } else {
      return Promise.resolve(result.value).then(next);
    }
  }

  return next();
}

function* genFn() {
  const USER_URI = "https://reqres.in/api/users";
  let res = yield axios.get(USER_URI);
  const userId = res.data.data[0].id;
  yield axios.get(`${USER_URI}/${userId}`);
}

const result = runner(genFn);
Promise.resolve(result).then(res => console.log(res.data));
```

2. 设定middleware时，为什么要写```sagaMiddleware.run(mySaga)```?

3. Redux-saga 怎麼知道要執行哪個處理非同步的函式？

## React Fiber

掉帧现象，大量的同步计算任务阻塞了浏览器的UI渲染。

旧版的React, 通过递归的方式，使用JS引起自身的函数调用栈，一直执行到栈空为止。

Fiber实现了自己的组件调用栈，可以随时暂停。

Virtual DOM 层，描述页面长什么样。
Reconciler 层，负责调用组件生命周期方法，进行 Diff 运算等。以前叫stack conciler, 现在叫Fiber conciler
Renderer 层，根据不同的平台，渲染出相应的页面，比较常见的是 ReactDOM 和 ReactNative

Fiber conciler 每执行一段时间，会将控制权交回给浏览器。

## 受控组件和非受控组件的区别

## 有没有了解过PWA

## purecomponent, imutable.js,

1、为什么使用pureComponent?
当使用component时，父组件的state或者props更新时，无论子组件的state、prop是否更新，都会触发子组件的更新，会行成很多没必要的render、
pureComponent优点在于，在shouldComponentWillUpdate进行浅层的比较，只要外层对象没变化，就不会render。

优点：不需要开发者使用shouldComponentUpdate就可以简单的判断来提升性能。
缺点：进行的是浅比较，可能由于深层的数据不一致导致而产生的错误的否定判断，从而导致页面得不到更新。

a、引用和第一层数据都没发生改变， render 方法就不会触发，这是我们需要达到的效果
b、虽然第一层数据没变，但引用变了，就会造成虚拟 DOM 计算的浪费。（引用变了，即判定改变）
c、第一层数据改变，但引用没变，会造成不渲染，所以需要很小心的操作数据。（引用没变，即判定没变。就比如直接改变state引用，然后直接复制给state（[1,2,3] => [1,2]）,同一个数组，同一个引用，删除无效）

2、为什么pureComponent可以提升性能？
主要在于pureComponent可以减少不必要的render，从而提高了性能，另外就是，不需要再手写shouldComponentUpdate里面的代码，从而节省了代码量；

当组件更新时，pureComponent的shouldComponentUpdate函数里对props和state做了一个浅对比，如果组件的state和prop都没有发生变化，就不会触发render方法，省去了virtual DOM的diff和重新生成的过程，从而提升了性能；也正是因为是浅对比，所以不适合使用在含有多层嵌套对象的state和prop中。

3、引入immutable.js

immutable使用了Structural Sharing（结构共享），即如果一个对象中的其中一个节点发生变化，只修改这个节点和受它影响的父节点，其他节点进行共享。这也就实现了react re-render的性能。

缺点：交互操作困难
1、数据封装在Immutable.js对象中，一旦包裹其中，这些数据很难与其他普通JS对象进行交互操作。
不能再使用标准JS中的点语法或者中括号语法，必须通过库API来操作。

2、

## Rax,weex
