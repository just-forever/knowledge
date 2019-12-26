# call && apply

如何自己实现一个类似于call和apply的函数的功能？ 

我所仅仅知道的是call是绑定this，仅此而已。但如何绑定？内部实现如何？ 都无从可知。

希望这篇从冴羽的博客的文章，能引导理解底层含义，及如何思考这类的问题，然后实现一个mycall，可以做同样的事。

call定义：
>call()方法在使用一个指定的this值和若干个指定的参数值得前提下调用某个函数和方法。

举个例子：

```js
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo); // 1
```

注意两点：
1.call改变了this的指向，指向到foo
2.bar函数执行了，但this指向的是foo，所以是1

## 模拟实现第一步
